import { Link } from "@tanstack/react-router";
import { PARTS, WEEKS, weekByNumber } from "@/data";
import { HowTo } from "./HowTo";
import { WeekBody } from "./WeekBody";

export function PrintGuide({ only }: { only?: number }) {
  const weeks = only ? [weekByNumber(only)].filter((w) => w != null) : WEEKS;

  return (
    <main className="mx-auto max-w-3xl bg-paper px-4 py-8 md:px-8">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <Link to="/" className="text-sm font-semibold underline decoration-line-strong underline-offset-4">
          Back to the guide
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated"
        >
          Save as PDF
        </button>
      </div>
      <p className="no-print mb-8 text-sm leading-relaxed text-muted">
        In the print dialog, choose Save as PDF. Leader notes are included. This is the version to hand a teacher.
      </p>

      {!only && (
        <>
          <header className="print-keep pb-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
              <img
                src="/cover.jpg"
                alt="Cover of The Visual Gospel by Philip Leineweber"
                width={780}
                height={1004}
                className="w-48 shrink-0 border border-line sm:w-56"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-widest text-muted uppercase">Philip Leineweber</p>
                <h1 className="font-display mt-3 text-5xl leading-none font-semibold tracking-tight">The Visual Gospel</h1>
                <p className="font-display mt-3 text-3xl font-medium">Leader Guide</p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed">
                  A 30-week study for small groups, classes, youth, and families. To be used alongside the devotional and
                  the flashcard app — not instead of them.
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/purchase-qr.svg"
                alt="QR code linking to visualgospelbook.com"
                width={256}
                height={256}
                className="size-28 shrink-0 border border-line bg-elevated p-1"
              />
              <div>
                <p className="font-display text-2xl font-semibold">Purchase the devotional</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  visualgospelbook.com
                  <br />
                  cards.visualgospelbook.com
                </p>
              </div>
            </div>
          </header>

          <section className="print-break max-w-2xl space-y-4 text-sm leading-relaxed">
            <h2 className="font-display text-3xl font-semibold">About this guide</h2>
            <p>
              The Visual Gospel Leader Guide is a free companion to The Visual Gospel by Philip Leineweber (ISBN
              979-8-1943079-3-7). Definitions and memory verses are taken from the book. The icebreakers, passages, and
              discussion questions were written for the gathering. They are not the reflection questions, gospel
              responses, or prayers printed in the devotion. Those belong to the personal reading.
            </p>
            <p>
              You may copy, print, and share this guide freely in your church, class, or home. Please do not sell it.
              The devotional itself remains under its own copyright.
            </p>
            <p>
              Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by
              Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. The ESV
              text may not be quoted in any publication made available to the public by a Creative Commons license. The
              ESV may not be translated into any other language.
            </p>
            <p>The drawings are the studies created for The Visual Gospel. Week numbers follow the book.</p>
          </section>

          <section className="print-break mt-10">
            <HowTo />
          </section>

          <section className="print-break mt-10">
            <h2 className="font-display text-3xl font-semibold">Thirty weeks</h2>
            <div className="mt-4 space-y-6">
              {PARTS.map((part) => (
                <div key={part.id}>
                  <h3 className="text-sm font-semibold tracking-widest text-muted uppercase">
                    Part {part.roman} · {part.title}
                  </h3>
                  <ul className="mt-2">
                    {part.weeks.map((n) => {
                      const week = WEEKS[n - 1];
                      return (
                        <li key={n} className="flex gap-3 border-t border-line py-1.5 text-sm">
                          <span className="w-8 font-semibold">{n}</span>
                          <span className="w-36 font-display text-base font-semibold">{week.word}</span>
                          <span className="text-muted">{week.ref}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <div className="mt-8 space-y-12">
        {weeks.map((week) => (
          <WeekBody key={week.n} week={week} mode="print" />
        ))}
      </div>
    </main>
  );
}
