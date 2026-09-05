import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
};

/** Drag / swipe / keyboard before-and-after comparison slider. */
export function BeforeAfter({ before, after, beforeAlt, afterAlt, label }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    setPos(Math.min(100, Math.max(0, ((clientX - box.left) / box.width) * 100)));
  };

  return (
    <figure className="w-full">
      <div
        ref={ref}
        className="relative aspect-[3/2] w-full touch-pan-y select-none overflow-hidden rounded-2xl shadow-xl"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1 || e.pointerType === "touch") move(e.clientX);
        }}
      >
        <img src={after} alt={afterAlt} width={1200} height={800} loading="lazy" className="absolute inset-0 size-full object-cover" />
        <img
          src={before}
          alt={beforeAlt}
          width={1200}
          height={800}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          After
        </span>
        <div className="absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-lg" style={{ left: `${pos}%` }} />
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          aria-label={`Before and after slider${label ? ` — ${label}` : ""}`}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
        <div
          className="pointer-events-none absolute top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg"
          style={{ left: `${pos}%` }}
        >
          <MoveHorizontal className="size-5" />
        </div>
      </div>
      {label && (
        <figcaption className="mt-3 text-center text-sm font-medium text-muted-foreground">{label}</figcaption>
      )}
    </figure>
  );
}
