import { useEffect, useState } from "react";

/**
 * A wet pane sits over the already-rendered site while a squeegee clears it.
 * Reduced-motion visitors see the site immediately.
 */
export function SqueegeeIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShow(false);
      return;
    }
    const t = window.setTimeout(() => setShow(false), 2900);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="cc-clean-intro pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      <div className="cc-wet-pane absolute inset-0">
        <div className="cc-suds absolute inset-0" />
        <div className="cc-water-streaks absolute inset-0" />
      </div>

      <div className="cc-squeegee absolute left-1/2 top-0 w-[112vw] -translate-x-1/2">
        <div className="cc-wet-edge absolute inset-x-0 -top-3 h-4" />
        <div className="cc-rubber-blade absolute inset-x-0 top-0 h-3" />
        <div className="cc-squeegee-head absolute left-1/2 top-2 h-9 w-[78vw] max-w-3xl -translate-x-1/2" />
        <div className="cc-squeegee-neck absolute left-1/2 top-9 h-14 w-20 -translate-x-1/2" />
        <div className="cc-squeegee-handle absolute left-1/2 top-16 h-44 w-12 -translate-x-1/2" />
        {[8, 19, 31, 44, 57, 69, 82, 93].map((left, index) => (
          <span
            key={left}
            className="cc-edge-drop absolute top-0 rounded-full"
            style={{ left: `${left}%`, animationDelay: `${0.2 + index * 0.07}s` }}
          />
        ))}
      </div>
    </div>
  );
}
