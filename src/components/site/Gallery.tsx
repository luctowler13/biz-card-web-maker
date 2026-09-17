import { BeforeAfter } from "./BeforeAfter";
import winBefore from "@/assets/ba-window-matching-before.jpg";
import winAfter from "@/assets/ba-window-after.jpg";
import driveBefore from "@/assets/ba-drive-matching-before.jpg";
import driveAfter from "@/assets/ba-drive-after.jpg";

/** Swap these for your own job photos — add as many pairs as you like. */
const pairs = [
  {
    label: "Residential windows — Christchurch",
    before: winBefore,
    after: winAfter,
    beforeAlt: "Window covered in dirt and water marks before cleaning",
    afterAlt: "The same window clean and clear after professional washing",
  },
  {
    label: "Driveway pressure wash",
    before: driveBefore,
    after: driveAfter,
    beforeAlt: "Concrete driveway covered in moss and grime before pressure washing",
    afterAlt: "Clean bright concrete driveway after pressure washing",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Our work</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
            The Diamond Clear difference
          </h2>
          <p className="mt-4 text-white/70">
            Drag the slider to see the change. On a phone, swipe across the photo.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {pairs.map((p) => (
            <BeforeAfter key={p.label} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
