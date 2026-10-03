import { useEffect, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { WEEKS, weekByNumber, weekFileBase, type Week } from "@/data";
import { Slide } from "./Slide";
import { cn } from "@/lib/cn";

export function Deck({ week }: { week: Week }) {
  const navigate = useNavigate();
  const stage = useRef<HTMLDivElement>(null);
  const prev = weekByNumber(week.n - 1);
  const next = weekByNumber(week.n + 1);
  const base = weekFileBase(week);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" && next) {
        navigate({ to: "/slides/$week", params: { week: String(next.n) } });
      }
      if (e.key === "ArrowLeft" && prev) {
        navigate({ to: "/slides/$week", params: { week: String(prev.n) } });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, next, prev]);

  function go(n: number) {
    navigate({ to: "/slides/$week", params: { week: String(n) } });
  }

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
        <Link to="/resources" className="text-sm font-semibold underline decoration-line-strong underline-offset-4">
          Resources
        </Link>
        <p className="text-sm text-muted">
          Week {week.n} of 30 · {week.word}
        </p>
      </div>

      <div ref={stage} className="deck-stage mt-4">
        <Slide week={week} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!prev}
          onClick={() => prev && go(prev.n)}
          className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={!next}
          onClick={() => next && go(next.n)}
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
        <a
          href={`/slides/${base}.jpg`}
          download
          className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold"
        >
          Download this slide
        </a>
        <a
          href="/the-visual-gospel-slides.pdf"
          download
          className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold"
        >
          Download the deck
        </a>
      </div>

      <nav className="mt-4 flex gap-1 overflow-x-auto pb-1" aria-label="Weeks">
        {WEEKS.map((item) => (
          <button
            key={item.n}
            type="button"
            onClick={() => go(item.n)}
            aria-current={item.n === week.n ? "true" : undefined}
            className={cn(
              "inline-flex size-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
              item.n === week.n ? "border-ink bg-ink text-elevated" : "border-line",
            )}
          >
            {item.n}
          </button>
        ))}
      </nav>
      <p className="mt-2 text-sm text-muted">Arrow keys move between weeks.</p>
    </main>
  );
}
