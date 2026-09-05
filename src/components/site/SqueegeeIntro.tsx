import { useEffect, useState } from "react";
import logo from "@/assets/crystal-clear-logo.png.asset.json";

/**
 * Opening animation: a squeegee blade wipes a dirty, water-marked pane of
 * glass off the screen to reveal the site underneath (~1.6s).
 * Skipped entirely for reduced-motion users and after the first view
 * in a browsing session.
 */
export function SqueegeeIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("cc-intro-seen");
    if (reduced || seen) return;
    sessionStorage.setItem("cc-intro-seen", "1");
    setShow(true);
    const t = window.setTimeout(() => setShow(false), 2000);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ animation: "cc-intro-out 0.35s ease-out 1.55s both" }}
    >
      {/* Dirty pane */}
      <div
        className="absolute inset-0 bg-ink"
        style={{
          animation: "cc-wipe 1.5s cubic-bezier(0.6, 0.02, 0.2, 1) 0.12s both",
          backgroundImage:
            "radial-gradient(60% 45% at 22% 28%, color-mix(in oklab, var(--brand) 40%, transparent), transparent 70%)," +
            "radial-gradient(50% 40% at 78% 70%, color-mix(in oklab, var(--brand-deep) 45%, transparent), transparent 70%)," +
            "repeating-linear-gradient(96deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 26px)," +
            "linear-gradient(180deg, color-mix(in oklab, var(--ink) 92%, white), color-mix(in oklab, var(--brand-deep) 55%, black))",
        }}
      >
        {/* Water marks + droplets */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, rgba(255,255,255,0.16) 0 3px, transparent 4px)," +
              "radial-gradient(circle at 68% 30%, rgba(255,255,255,0.13) 0 5px, transparent 6px)," +
              "radial-gradient(circle at 48% 82%, rgba(255,255,255,0.1) 0 4px, transparent 5px)",
            backgroundSize: "180px 180px, 260px 260px, 220px 220px",
          }}
        />
        {[12, 27, 41, 58, 73, 88].map((left, i) => (
          <span
            key={left}
            className="absolute top-0 h-16 w-px bg-white/25"
            style={{
              left: `${left}%`,
              animation: `cc-drip ${1.4 + i * 0.12}s ease-in ${i * 0.09}s both`,
            }}
          />
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
          <img
            src={logo.url}
            alt=""
            width={200}
            height={200}
            className="w-32 opacity-90 brightness-0 invert sm:w-40"
          />
          <p className="font-display text-xs uppercase tracking-[0.5em] text-white/70">
            Crystal Clear
          </p>
        </div>
      </div>

      {/* Squeegee blade with wet edge */}
      <div
        className="absolute inset-y-0 left-0 w-[16vw] min-w-[90px]"
        style={{ animation: "cc-blade 1.5s cubic-bezier(0.6, 0.02, 0.2, 1) 0.12s both" }}
      >
        <div className="absolute inset-y-0 right-[38%] w-[62%] bg-gradient-to-r from-transparent via-white/15 to-white/45 blur-[2px]" />
        <div className="absolute inset-y-0 right-[34%] w-[6px] rounded-full bg-gradient-to-b from-white/90 via-white/60 to-white/90 shadow-[0_0_28px_8px_rgba(255,255,255,0.35)]" />
        <div className="absolute inset-y-0 right-[30%] w-[10px] rounded-sm bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600" />
        <div className="absolute inset-y-0 right-[26%] w-[5px] rounded-sm bg-slate-800/80" />
      </div>
    </div>
  );
}
