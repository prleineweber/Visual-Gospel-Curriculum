import { Link } from "@tanstack/react-router";
import { PARTS, WEEKS, partOf } from "@/data";
import { meetingLabel, useGuide } from "@/lib/guide-store";
import { HowTo } from "./HowTo";
import { cn } from "@/lib/cn";

export function Home() {
  const hydrated = useGuide((s) => s.hydrated);
  const groupName = useGuide((s) => s.groupName);
  const startDate = useGuide((s) => s.startDate);
  const done = useGuide((s) => s.done);
  const setGroupName = useGuide((s) => s.setGroupName);
  const setStartDate = useGuide((s) => s.setStartDate);

  const next = WEEKS.find((w) => !done.includes(w.n)) ?? WEEKS[0];
  const finished = done.length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        <div className="order-2 min-w-0 flex-1 md:order-1">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">Free for your church, class, or home</p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl leading-none font-semibold tracking-tight md:text-6xl">
            Thirty weeks on the gospel.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            A leader guide for The Visual Gospel. Each gathering gives you the word, the book’s definition, the memory
            verse, an icebreaker, a passage your group has not already journaled, questions that start a real
            conversation, and a missional challenge — one action and one true sentence for someone far from Jesus.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/week/$week"
              params={{ week: String(next.n) }}
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-elevated"
            >
              {finished > 0 && finished < 30 ? `Continue · Week ${next.n}, ${next.word}` : `Start with ${next.word}`}
            </Link>
            <a
              href="/the-visual-gospel-leader-guide.pdf"
              download
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold"
            >
              Download the PDF
            </a>
            <Link
              to="/resources"
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold"
            >
              Resources
            </Link>
            <a
              href="https://visualgospelbook.com/"
              className="inline-flex min-h-11 items-center px-2 text-sm font-semibold underline decoration-line-strong underline-offset-4"
            >
              The book
            </a>
          </div>
        </div>
        <a href="https://visualgospelbook.com/" className="order-1 w-40 shrink-0 md:order-2 md:w-64">
          <img
            src="/cover.jpg"
            alt="Cover of The Visual Gospel by Philip Leineweber"
            width={780}
            height={1004}
            className="w-full border border-line bg-elevated shadow-md"
          />
        </a>
      </div>

      <section className="mt-10 grid gap-4 rounded-card border border-line bg-elevated p-4 md:grid-cols-2 md:p-5">
        <label className="block text-sm">
          <span className="font-semibold">Group name</span>
          <input
            value={hydrated ? groupName : ""}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Wednesday night, youth, membership class"
            className="mt-2 min-h-11 w-full rounded-lg border border-line-strong bg-paper px-3"
          />
        </label>
        <label className="block text-sm">
          <span className="font-semibold">First gathering</span>
          <input
            type="date"
            value={hydrated ? startDate : ""}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-2 min-h-11 w-full rounded-lg border border-line-strong bg-paper px-3"
          />
          <span className="mt-1 block text-muted">Dates fill in on each week. They stay on this device.</span>
        </label>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-display text-3xl font-semibold tracking-tight">The thirty weeks</h2>
          <p className="text-sm text-muted">{finished} of 30 taught</p>
        </div>
        <div className="mt-5 space-y-8">
          {PARTS.map((part) => (
            <div key={part.id}>
              <h3 className="text-xs font-semibold tracking-widest text-muted uppercase">
                Part {part.roman} · {part.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">{part.subtitle}</p>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {part.weeks.map((n) => {
                  const week = WEEKS[n - 1];
                  const taught = done.includes(n);
                  const when = hydrated ? meetingLabel(startDate, n) : null;
                  return (
                    <li key={n}>
                      <Link
                        to="/week/$week"
                        params={{ week: String(n) }}
                        className="flex min-h-14 items-center gap-3 py-3"
                      >
                        <span
                          className={cn(
                            "flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
                            taught ? "border-ink bg-ink text-elevated" : "border-line-strong",
                          )}
                          aria-hidden
                        >
                          {n}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-xl leading-tight font-semibold">{week.word}</span>
                          <span className="block truncate text-sm text-muted">
                            {week.ref}
                            {when ? ` · ${when}` : ""}
                          </span>
                        </span>
                        <span className="hidden text-sm text-muted sm:block">{partOf(week).title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-12">
        <HowTo />
      </section>
    </main>
  );
}
