import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { artSrc, isPartStart, partOf, weekByNumber, type Week } from "@/data";
import { meetingLabel, useGuide } from "@/lib/guide-store";
import { cn } from "@/lib/cn";
import type { Prompt } from "@/data";

const STEPS = [
  ["ice", "Icebreaker", "7 min"],
  ["word", "The word", "8 min"],
  ["bible", "Open the Bible", "15 min"],
  ["talk", "Around the room", "20 min"],
  ["say", "Say it", "5 min"],
  ["go", "Go", "5 min"],
  ["pray", "Pray", "8 min"],
] as const;

function Core({ on }: { on?: boolean }) {
  if (!on) return null;
  return (
    <span className="ml-2 align-middle text-xs font-semibold tracking-widest text-muted uppercase">Core</span>
  );
}

function Aim({ children }: { children: ReactNode }) {
  return (
    <p className="leader-only mt-2 border-l-2 border-line-strong pl-3 text-sm leading-relaxed text-muted">
      <span className="font-semibold text-ink">Leader. </span>
      {children}
    </p>
  );
}

function PromptBlock({ n, prompt }: { n: number; prompt: Prompt }) {
  return (
    <li className="border-t border-line py-4">
      <p className="leading-relaxed">
        <span className="mr-2 font-display text-lg font-semibold">{n}.</span>
        {prompt.q}
        <Core on={prompt.star} />
      </p>
      <Aim>{prompt.aim}</Aim>
    </li>
  );
}

export function WeekBody({ week, mode = "screen" }: { week: Week; mode?: "screen" | "print" }) {
  const part = partOf(week);
  const printing = mode === "print";
  const hydrated = useGuide((s) => s.hydrated);
  const startDate = useGuide((s) => s.startDate);
  const hideNotes = useGuide((s) => s.hideNotes);
  const done = useGuide((s) => s.done.includes(week.n));
  const note = useGuide((s) => s.notes[String(week.n)] ?? "");
  const toggleDone = useGuide((s) => s.toggleDone);
  const setNote = useGuide((s) => s.setNote);
  const setHideNotes = useGuide((s) => s.setHideNotes);
  const when = hydrated ? meetingLabel(startDate, week.n) : null;
  const prev = weekByNumber(week.n - 1);
  const next = weekByNumber(week.n + 1);

  return (
    <article className={cn(printing && "print-break", !printing && hideNotes && "hide-notes")}>
      <header>
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">
          Part {part.roman} · {part.title}
          <span className="mx-2">·</span>
          Week {week.n} of 30
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h1 className="font-display text-5xl leading-none font-semibold tracking-tight md:text-6xl">{week.word}</h1>
          {when && <p className="text-sm text-muted">{when}</p>}
        </div>
        {!printing && (
          <div className="no-print mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => toggleDone(week.n)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold",
                done ? "border-ink bg-ink text-elevated" : "border-line-strong",
              )}
            >
              {done ? "Marked taught" : "Mark taught"}
            </button>
            <button
              type="button"
              onClick={() => setHideNotes(!hideNotes)}
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold"
            >
              {hideNotes ? "Show leader notes" : "Hide notes to project"}
            </button>
            <Link
              to="/slides/$week"
              params={{ week: String(week.n) }}
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated"
            >
              Slide deck
            </Link>
            <Link
              to="/print"
              search={{ week: week.n }}
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold"
            >
              Print this week
            </Link>
          </div>
        )}
      </header>

      {!printing && (
        <nav className="no-print mt-6 flex gap-2 overflow-x-auto pb-1" aria-label="Session movements">
          {STEPS.map(([id, label, time]) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-line bg-elevated px-3 text-sm"
            >
              {label}
              <span className="ml-2 text-muted">{time}</span>
            </a>
          ))}
        </nav>
      )}

      <figure className="mt-6">
        <img
          src={artSrc(week.n)}
          alt={week.alt}
          className="mx-auto w-full max-w-lg bg-elevated object-contain"
        />
        <figcaption className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">{week.picture}</figcaption>
      </figure>

      {isPartStart(week) && (
        <aside className="mt-6 rounded-card border border-line bg-subtle px-4 py-4 md:px-5">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">
            Open Part {part.roman} by saying
          </p>
          <p className="mt-2 leading-relaxed">{part.open}</p>
        </aside>
      )}

      {week.lookBack && (
        <aside className="mt-4 rounded-card border border-line px-4 py-4 md:px-5">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">Optional, three minutes</p>
          <p className="mt-2 leading-relaxed">{week.lookBack}</p>
        </aside>
      )}

      <section className="mt-8 rounded-card border border-line bg-elevated px-4 py-4 md:px-5">
        <h2 className="font-display text-xl font-semibold">Before you gather</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
          <li>Read Day {week.n}, {week.word}, in The Visual Gospel. Do not reteach the essay.</li>
          <li>Read {week.passageRef} in your Bible. The excerpt below is only a backup.</li>
          <li>Your people should already have answered the day’s reflection questions. Do not ask those again.</li>
          <li>Leave with a name. The missional challenge only works if someone is named before you pray.</li>
        </ul>
      </section>

      <section id="ice" className="mt-10 scroll-mt-24">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">1 · Icebreaker · 7 min</p>
        <h2 className="font-display mt-1 text-3xl font-semibold">Open the room</h2>
        <p className="mt-3 text-lg leading-relaxed">{week.icebreaker}</p>
        <Aim>{week.iceAim} Say that passing is allowed, especially the first few weeks.</Aim>
      </section>

      <section id="word" className="mt-10 scroll-mt-24">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">2 · The word · 8 min</p>
        <h2 className="font-display mt-1 text-3xl font-semibold">See it, then say it</h2>
        <div className="mt-4 rounded-card bg-subtle px-4 py-4 md:px-5">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">If you need the words</p>
          <p className="mt-2 leading-relaxed">{week.show}</p>
        </div>
        <dl className="mt-6 space-y-5">
          <div>
            <dt className="text-xs font-semibold tracking-widest text-muted uppercase">Definition, from the book</dt>
            <dd className="mt-1 text-lg leading-relaxed">{week.definition}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-widest text-muted uppercase">In the original language</dt>
            <dd className="mt-1 leading-relaxed text-muted">{week.language}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-widest text-muted uppercase">Memory verse · {week.ref}</dt>
            <dd className="font-display mt-2 text-xl leading-snug italic">{week.verse}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed">
          Together, open the{" "}
          <a className="underline decoration-line-strong underline-offset-2" href="https://cards.visualgospelbook.com/">
            flashcard
          </a>{" "}
          for {week.word}. Say the word, the definition, and the verse once. Then put the phone away.
        </p>
      </section>

      <section id="bible" className="mt-10 scroll-mt-24">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">3 · Open the Bible · 15 min</p>
        <h2 className="font-display mt-1 text-3xl font-semibold">{week.passageRef}</h2>
        <p className="mt-3 leading-relaxed text-muted">{week.passageWhy}</p>
        <blockquote className="mt-4 border-l-2 border-ink pl-4 leading-relaxed">{week.passage}</blockquote>
        <p className="leader-only mt-3 text-sm text-muted">
          Have two readers if you can. Bibles open. The excerpt is only here so a forgotten Bible does not stop the
          night.
        </p>
        <h3 className="mt-6 font-display text-xl font-semibold">From the passage</h3>
        <ol>
          {week.fromText.map((prompt, i) => (
            <PromptBlock key={prompt.q} n={i + 1} prompt={prompt} />
          ))}
        </ol>
      </section>

      <section id="talk" className="mt-10 scroll-mt-24">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">4 · Around the room · 20 min</p>
        <h2 className="font-display mt-1 text-3xl font-semibold">A conversation this chapter did not assign</h2>
        <ol>
          {week.talk.map((prompt, i) => (
            <PromptBlock key={prompt.q} n={i + 3} prompt={prompt} />
          ))}
        </ol>
      </section>

      <section id="say" className="mt-10 scroll-mt-24">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">5 · Say it · 5 min</p>
        <h2 className="font-display mt-1 text-3xl font-semibold">In one sentence</h2>
        <p className="font-display mt-3 text-2xl leading-snug font-medium">{week.say}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Ask for two volunteers, not the whole circle. They may look at the sentence, then try it without looking.
          Clumsy and true is the goal.
        </p>
      </section>

      <section id="go" className="mt-10 scroll-mt-24 rounded-card border border-ink px-4 py-5 md:px-5">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">6 · This week · 5 min</p>
        <h2 className="font-display mt-1 text-3xl font-semibold">Missional challenge</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Before next week, carry this word to someone far from Jesus — a neighbor, a classmate, a coworker, a friend.
          Do it with a real action and with a true sentence. Name the person before you pray.
        </p>
        <p className="mt-4 text-lg leading-relaxed">{week.mission}</p>
        <Aim>
          {week.missionAim} Next week, before the icebreaker, take one minute. Who went, and what happened? One sentence.
          No speeches.
        </Aim>
      </section>

      <section id="pray" className="mt-10 scroll-mt-24">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">7 · Pray · 8 min</p>
        <h2 className="font-display mt-1 text-3xl font-semibold">Pray these, and leave room for others</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed">
          {week.pray.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
      </section>

      <section className="leader-only mt-10 rounded-card border border-line bg-subtle px-4 py-4 md:px-5">
        <h2 className="font-display text-2xl font-semibold">Before you stumble</h2>
        <p className="mt-2 leading-relaxed">{week.watch}</p>
        <h3 className="mt-4 text-sm font-semibold tracking-widest text-muted uppercase">With students</h3>
        <p className="mt-1 leading-relaxed">{week.youth}</p>
        <h3 className="mt-4 text-sm font-semibold tracking-widest text-muted uppercase">If you still have time</h3>
        <p className="mt-1 leading-relaxed">{week.further}</p>
      </section>

      {!printing && (
        <section className="no-print mt-8">
          <label className="text-sm font-semibold" htmlFor={`note-${week.n}`}>
            Notes for your group
          </label>
          <textarea
            id={`note-${week.n}`}
            value={hydrated ? note : ""}
            onChange={(e) => setNote(week.n, e.target.value)}
            rows={4}
            placeholder="Room setup, people to follow up with, what landed last time."
            className="mt-2 w-full rounded-card border border-line-strong bg-elevated px-3 py-3 text-base leading-relaxed"
          />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
            {prev ? (
              <Link to="/week/$week" params={{ week: String(prev.n) }} className="min-h-11 text-sm font-semibold underline decoration-line-strong underline-offset-4">
                Week {prev.n} · {prev.word}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link to="/week/$week" params={{ week: String(next.n) }} className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated">
                Week {next.n} · {next.word}
              </Link>
            ) : (
              <Link to="/" className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated">
                Back to all weeks
              </Link>
            )}
          </div>
        </section>
      )}
    </article>
  );
}
