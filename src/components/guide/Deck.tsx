import { useEffect, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { weekByNumber, type Week } from "@/data";
import { Slide, SLIDE_COUNT, SLIDES } from "./Slide";
import { cn } from "@/lib/cn";

export function Deck({ week, slide }: { week: Week; slide: number }) {
  const navigate = useNavigate();
  const stage = useRef<HTMLDivElement>(null);
  const prevWeek = weekByNumber(week.n - 1);
  const nextWeek = weekByNumber(week.n + 1);
  const s = Math.min(SLIDE_COUNT, Math.max(1, slide));

  function go(weekN: number, slideN: number) {
    navigate({
      to: "/slides/$week",
      params: { week: String(weekN) },
      search: { s: slideN },
      replace: true,
    });
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        if (s < SLIDE_COUNT) go(week.n, s + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        if (s > 1) go(week.n, s - 1);
      }
      if (e.key === "Home") go(week.n, 1);
      if (e.key === "End") go(week.n, SLIDE_COUNT);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [s, week.n]);

  function present() {
    const node = stage.current;
    if (!node) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    void node.requestFullscreen();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/resources" className="text-sm font-semibold underline decoration-line-strong underline-offset-4">
            Resources
          </Link>
          <Link
            to="/week/$week"
            params={{ week: String(week.n) }}
            className="text-sm font-semibold underline decoration-line-strong underline-offset-4"
          >
            Lesson
          </Link>
        </div>
        <p className="text-sm text-muted">
          Week {week.n} of 30 · {week.word} · {SLIDES[s - 1].label}
        </p>
      </div>

      <div
        ref={stage}
        className="deck-stage mt-4"
        onClick={() => {
          if (document.fullscreenElement && s < SLIDE_COUNT) go(week.n, s + 1);
        }}
      >
        <Slide week={week} index={s - 1} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={s <= 1}
          onClick={() => go(week.n, s - 1)}
          className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={s >= SLIDE_COUNT}
          onClick={() => go(week.n, s + 1)}
          className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated disabled:opacity-40"
        >
          Next
        </button>
        <button
          type="button"
          onClick={present}
          className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold"
        >
          Present
        </button>
        {prevWeek && (
          <button
            type="button"
            onClick={() => go(prevWeek.n, 1)}
            className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold"
          >
            Week {prevWeek.n}
          </button>
        )}
        {nextWeek && (
          <button
            type="button"
            onClick={() => go(nextWeek.n, 1)}
            className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold"
          >
            Week {nextWeek.n}
          </button>
        )}
      </div>

      <nav className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Slides in this week">
        {SLIDES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => go(week.n, i + 1)}
            aria-current={i + 1 === s ? "true" : undefined}
            className={cn(
              "inline-flex min-h-11 shrink-0 items-center rounded-full border px-3 text-sm font-semibold",
              i + 1 === s ? "border-ink bg-ink text-elevated" : "border-line",
            )}
          >
            {i + 1} {item.label}
          </button>
        ))}
      </nav>
      <p className="mt-2 text-sm text-muted">Arrow keys move through this week. In Present, click the slide to advance.</p>
    </main>
  );
}
