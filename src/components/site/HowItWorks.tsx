const steps = [
  {
    number: "01",
    title: "Send us the details",
    body: "Tell us where you are, what needs cleaning and whether the property is residential or commercial. Photos are helpful but optional.",
  },
  {
    number: "02",
    title: "Receive your free quote",
    body: "We’ll review the job and come back to you with a clear, no-obligation price and a suitable time.",
  },
  {
    number: "03",
    title: "We arrive and clean",
    body: "Our team arrives as arranged and completes the work carefully, professionally and with close attention to detail.",
  },
  {
    number: "04",
    title: "Walk around together",
    body: "Before we leave, we’ll check the finished work with you. If you’re not completely happy, we’ll fix anything that needs attention.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ice py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">How it works</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-ink sm:text-5xl">
            From first message to spotless
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            A straightforward process, clear communication and a result you’re completely happy with.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="border-t-2 border-brand/20 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Step {step.number}
              </p>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}