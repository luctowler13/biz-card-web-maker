import { useEffect, useState } from "react";

/**
 * Full-screen wet glass intro.
 * A squeegee moves down the screen while the wet layer clears behind it.
 * Reduced-motion visitors skip the effect.
 */
export function SqueegeeIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) return;

    setShow(true);

    const timer = window.setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!show) return null;

  const drops = [8, 19, 31, 44, 57, 69, 82, 93];

  return (
    <div
      aria-hidden="true"
      className="cc-clean-intro pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      {/* Wet / soapy glass layer */}
      <div className="cc-wet-pane absolute inset-0">
        <div className="cc-suds absolute inset-0" />
        <div className="cc-water-streaks absolute inset-0" />
      </div>

      {/* Squeegee */}
      <div className="cc-squeegee absolute left-1/2 top-0 w-[94vw] -translate-x-1/2">
        {/* Water/foam edge */}
        <div className="cc-wet-edge absolute inset-x-0 -top-3 h-4" />

        {/* Rubber wiping blade */}
        <div className="cc-rubber-blade absolute inset-x-0 top-0 h-3" />

        {/* Metal head */}
        <div className="cc-squeegee-head absolute left-1/2 top-2 h-9 w-[78vw] max-w-3xl -translate-x-1/2" />

        {/* Neck */}
        <div className="cc-squeegee-neck absolute left-1/2 top-9 h-14 w-20 -translate-x-1/2" />

        {/* Handle */}
        <div className="cc-squeegee-handle absolute left-1/2 top-16 h-44 w-12 -translate-x-1/2" />

        {/* Dripping water */}
        {drops.map((left, index) => (
          <span
            key={left}
            className="cc-edge-drop absolute top-0 rounded-full"
            style={{
              left: `${left}%`,
              animationDelay: `${0.2 + index * 0.07}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
