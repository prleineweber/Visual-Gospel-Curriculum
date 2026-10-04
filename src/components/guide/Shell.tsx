import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <header className="no-print sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link to="/" aria-label="The Visual Gospel Leader Guide" className="flex min-w-0 items-center gap-3">
            <img
              src="/cover.jpg"
              alt=""
              width={780}
              height={1004}
              className="h-11 w-auto border border-line"
            />
            <span className="hidden min-w-0 sm:block">
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">The Visual Gospel</p>
              <p className="font-display text-xl leading-none font-semibold">Leader Guide</p>
            </span>
          </Link>
          <nav className="flex shrink-0 items-center gap-2">
            <a
              href="https://visualgospelbook.com/"
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold"
            >
              Home
            </a>
            <Link
              to="/resources"
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold"
            >
              Resources
            </Link>
            <Link
              to="/print"
              className="hidden min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold sm:inline-flex"
            >
              Print
            </Link>
            <a
              href="/the-visual-gospel-leader-guide.pdf"
              download
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-3 text-sm font-semibold text-elevated"
            >
              <span className="sm:hidden">PDF</span>
              <span className="hidden sm:inline">Download PDF</span>
            </a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="no-print border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-relaxed text-muted md:px-6">
          <p>
            A free guide to accompany{" "}
            <a className="underline decoration-line-strong underline-offset-2" href="https://visualgospelbook.com/">
              The Visual Gospel
            </a>{" "}
            by Philip Leineweber, and the{" "}
            <a className="underline decoration-line-strong underline-offset-2" href="https://cards.visualgospelbook.com/">
              flashcard app
            </a>
            . Definitions and memory verses are from the book. Group questions are not the devotional’s reflection
            questions.
          </p>
          <p className="mt-3">
            Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by
            Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
