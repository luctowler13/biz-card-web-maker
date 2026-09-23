import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255),
  address: z.string().trim().min(4).max(200),
  service: z.enum(["Window Washing", "Pressure Washing", "Both"]),
  propertyType: z.enum(["Residential", "Commercial"]),
  details: z.string().trim().min(5).max(1000),
  contactMethod: z.enum(["Phone", "Email", "Text"]),
});

export const sendQuoteEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service is not configured");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       from: "Diamond Clear Quotes <quotes@diamondclearnz.online>",
to: ["diamondclearnz@gmail.com"],
        reply_to: data.email,
        subject: `New quote request — ${data.service} — ${data.name}`,
        text: [
          "NEW QUOTE REQUEST",
          "",
          `Name: ${data.name}`,
          `Phone: ${data.phone}`,
          `Email: ${data.email}`,
          `Property address: ${data.address}`,
          `Service: ${data.service}`,
          `Property type: ${data.propertyType}`,
          `Preferred contact method: ${data.contactMethod}`,
          "",
          "Job details:",
          data.details,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error:", response.status, error);
      throw new Error("Unable to send quote request");
    }

    return { success: true };
  });
