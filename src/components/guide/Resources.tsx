import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PARTS, WEEKS, weekFileBase } from "@/data";
import { Slide } from "./Slide";

const BUY = "https://www.amazon.com/dp/B0HLC7QP8N";

export function Resources() {
  const [open, setOpen] = useState(1);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">For the leader</p>
      <h1 className="font-display mt-3 text-5xl leading-none font-semibold tracking-tight md:text-6xl">Resources</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed">
        The devotional, the flash cards, the full guide, a PDF for each week, and a slide deck you can project.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <section className="flex flex-col items-start gap-4 rounded-card border border-line bg-elevated p-4 sm:flex-row lg:flex-col md:p-5">
          <img
            src="/cover.jpg"
            alt="Cover of The Visual Gospel"
            width={780}
            height={1004}
            className="h-auto w-36 max-w-full shrink-0 self-start border border-line object-contain sm:w-28 lg:w-36"
          />
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-semibold">The devotional</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Thirty days. The drawings, the definitions, and the personal reflection questions live in the book.
            </p>
            <a
              href={BUY}
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated"
            >
              Buy the devotional
            </a>
          </div>
        </section>

        <section className="flex flex-col rounded-card border border-line bg-elevated p-4 md:p-5">
          <h2 className="font-display text-2xl font-semibold">The flash cards</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            The thirty words, one card at a time: the drawing, the definition, and the memory verse. For class, or to
            put in someone’s hands.
          </p>
          <a
            href="https://cards.visualgospelbook.com/"
            className="mt-auto inline-flex min-h-11 w-fit items-center rounded-full border border-line-strong px-4 text-sm font-semibold"
          >
            Open the flash cards
          </a>
        </section>

        <section className="flex flex-col rounded-card border border-line bg-elevated p-4 md:p-5">
          <h2 className="font-display text-2xl font-semibold">The full leader guide</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            All thirty weeks, with leader notes, the cover, and a code to purchase the book. Free to copy for your
            church. Please do not sell it.
          </p>
          <a
            href="/the-visual-gospel-leader-guide.pdf"
            download
            className="mt-auto inline-flex min-h-11 w-fit items-center rounded-full border border-line-strong px-4 text-sm font-semibold"
          >
            Download the full PDF
          </a>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Each week</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          The lesson PDF is that week’s gathering, leader notes and missional challenge included. The slide deck is
          eight 16:9 slides: the word, a large memory verse, and one slide for each movement of the hour.
        </p>
        <div className="mt-4 border-t border-line">
          {PARTS.map((part) => {
            const shown = open === part.id;
            return (
              <div key={part.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={shown}
                  onClick={() => setOpen(shown ? 0 : part.id)}
                  className="flex min-h-14 w-full items-center justify-between gap-3 py-3 text-left"
                >
                  <span>
                    <span className="text-xs font-semibold tracking-widest text-muted uppercase">
                      Part {part.roman}
                    </span>
                    <span className="block font-display text-2xl leading-tight font-semibold">{part.title}</span>
                  </span>
                  <span className="text-sm font-semibold text-muted">{shown ? "Hide" : "Show"}</span>
                </button>
                {shown && (
                  <ul className="pb-3">
                    {part.weeks.map((n) => {
                      const week = WEEKS[n - 1];
                      const base = weekFileBase(week);
                      return (
                        <li
                          key={n}
                          className="flex flex-col gap-3 border-t border-line py-3 sm:flex-row sm:items-center"
                        >
                          <span className="min-w-0 flex-1">
                            <span className="font-display text-xl font-semibold">
                              {week.n}. {week.word}
                            </span>
                            <span className="block text-sm text-muted">{week.ref}</span>
                          </span>
                          <span className="flex flex-wrap gap-2">
                            <a
                              href={`/lessons/${base}.pdf`}
                              download
                              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold"
                            >
                              Lesson PDF
                            </a>
                            <a
                              href={`/decks/${base}.zip`}
                              download
                              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold"
                            >
                              Download slides
                            </a>
                            <Link
                              to="/slides/$week"
                              params={{ week: String(week.n) }}
                              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold"
                            >
                              Slide deck
                            </Link>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Slide deck</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Eight slides for every week, large enough for a screen. The first is the drawing, the word, and the
          definition. The second is the drawing and the memory verse. Then one slide each for the icebreaker, the
          passage, the discussion, the sentence, the missional challenge, and prayer. Download gives you those slides
          as images.
        </p>
        <div className="mt-4 max-w-3xl">
          <Slide week={WEEKS[0]} />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/slides/$week"
            params={{ week: "1" }}
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-elevated"
          >
            Open the deck
          </Link>
          <a
            href="/the-visual-gospel-slide-deck.zip"
            download
            className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold"
          >
            Download all slides
          </a>
        </div>
      </section>
    </main>
  );
}
