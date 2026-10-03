import type { ReactNode } from "react";
import { artSrc, partOf, type Week } from "@/data";
import { cn } from "@/lib/cn";

export const SLIDES = [
  { id: "word", label: "Word" },
  { id: "verse", label: "Verse" },
  { id: "ice", label: "Icebreaker" },
  { id: "bible", label: "Bible" },
  { id: "talk", label: "Discuss" },
  { id: "say", label: "Say it" },
  { id: "go", label: "Go" },
  { id: "pray", label: "Pray" },
] as const;

export const SLIDE_COUNT = SLIDES.length;

export function slideIndex(raw: unknown): number {
  const n = Number(raw);
  if (Number.isInteger(n) && n >= 1 && n <= SLIDE_COUNT) return n;
  return 1;
}

function sizeByLength(text: string, steps: [number, string][], fallback: string) {
  for (const [max, size] of steps) {
    if (text.length <= max) return size;
  }
  return fallback;
}

export function Slide({ week, index = 0 }: { week: Week; index?: number }) {
  const safe = ((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
  const kind = SLIDES[safe].id;

  return (
    <div className="slide-frame">
      <article className="slide-canvas">
        {kind === "word" && <WordSlide week={week} />}
        {kind === "verse" && <VerseSlide week={week} />}
        {kind === "ice" && <IceSlide week={week} />}
        {kind === "bible" && <BibleSlide week={week} />}
        {kind === "talk" && <TalkSlide week={week} />}
        {kind === "say" && <SaySlide week={week} />}
        {kind === "go" && <GoSlide week={week} />}
        {kind === "pray" && <PraySlide week={week} />}
      </article>
    </div>
  );
}

function Picture({ week, width }: { week: Week; width: string }) {
  return (
    <div className={cn("flex h-full shrink-0 items-center justify-center", width)}>
      <img
        src={artSrc(week.n)}
        alt={week.alt}
        className="max-h-[860px] max-w-full border border-line bg-elevated object-contain"
      />
    </div>
  );
}

function Split({
  week,
  width,
  children,
}: {
  week: Week;
  width: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <Picture week={week} width={width} />
      <div className="flex min-w-0 flex-1 flex-col py-16 pr-16 pl-6">{children}</div>
    </div>
  );
}

function Kicker({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <p className="text-lg font-semibold tracking-widest text-muted uppercase">
      {children}
      <span className="float-right tracking-widest">
        {index} / {SLIDE_COUNT}
      </span>
    </p>
  );
}

function WordSlide({ week }: { week: Week }) {
  const part = partOf(week);
  return (
    <Split week={week} width="w-2/5 px-16">
      <Kicker index={1}>
        Week {week.n}
        <span className="mx-3">·</span>
        Part {part.roman}
        <span className="mx-3">·</span>
        {part.title}
      </Kicker>
      <h1
        className={cn(
          "font-display mt-6 leading-none font-semibold tracking-tight",
          week.word.length > 12 ? "text-7xl" : "text-8xl",
        )}
      >
        {week.word}
      </h1>
      <p className="mt-6 text-2xl leading-snug text-muted">{week.language}</p>
      <p
        className={cn(
          "mt-10 leading-snug",
          sizeByLength(week.definition, [[180, "text-5xl"], [230, "text-4xl"]], "text-4xl"),
        )}
      >
        {week.definition}
      </p>
    </Split>
  );
}

function VerseSlide({ week }: { week: Week }) {
  return (
    <Split week={week} width="w-1/3 px-14">
      <Kicker index={2}>Memory verse · {week.word}</Kicker>
      <p
        className={cn(
          "font-display mt-8 leading-tight",
          sizeByLength(week.verse, [[140, "text-7xl"], [180, "text-6xl"], [220, "text-5xl"]], "text-5xl"),
        )}
      >
        {week.verse}
      </p>
      <p className="mt-8 text-4xl font-semibold">{week.ref}</p>
    </Split>
  );
}

function IceSlide({ week }: { week: Week }) {
  return (
    <Split week={week} width="w-1/4 px-12">
      <Kicker index={3}>Icebreaker · {week.word}</Kicker>
      <p
        className={cn(
          "font-display mt-10 leading-tight",
          sizeByLength(week.icebreaker, [[110, "text-6xl"], [150, "text-5xl"]], "text-5xl"),
        )}
      >
        {week.icebreaker}
      </p>
      <p className="mt-auto text-2xl text-muted">You can pass.</p>
    </Split>
  );
}

function BibleSlide({ week }: { week: Week }) {
  const long = week.fromText.some((prompt) => prompt.q.length > 160);
  return (
    <Split week={week} width="w-1/4 px-12">
      <Kicker index={4}>Open the Bible · {week.word}</Kicker>
      <h2 className="font-display mt-6 text-6xl leading-none font-semibold tracking-tight">{week.passageRef}</h2>
      <p className="mt-4 text-2xl text-muted">Bibles open. Read it aloud.</p>
      <ol className={cn("mt-8 space-y-6", long ? "text-3xl" : "text-4xl")}>
        {week.fromText.map((prompt, i) => (
          <li key={prompt.q} className="leading-snug">
            <span className="font-display font-semibold">{i + 1}. </span>
            {prompt.q}
          </li>
        ))}
      </ol>
    </Split>
  );
}

function TalkSlide({ week }: { week: Week }) {
  const long = week.talk.some((prompt) => prompt.q.length > 180);
  return (
    <Split week={week} width="w-1/4 px-12">
      <Kicker index={5}>Around the room · {week.word}</Kicker>
      <ol className={cn("mt-8 space-y-6", long ? "text-3xl" : "text-4xl")}>
        {week.talk.map((prompt, i) => (
          <li key={prompt.q} className="leading-snug">
            <span className="font-display font-semibold">{i + 1}. </span>
            {prompt.q}
          </li>
        ))}
      </ol>
    </Split>
  );
}

function SaySlide({ week }: { week: Week }) {
  return (
    <Split week={week} width="w-1/3 px-14">
      <Kicker index={6}>Say it · {week.word}</Kicker>
      <p
        className={cn(
          "font-display mt-10 leading-tight",
          sizeByLength(week.say, [[90, "text-7xl"], [110, "text-6xl"]], "text-5xl"),
        )}
      >
        {week.say}
      </p>
      <p className="mt-auto text-2xl text-muted">Two voices. Then say it without looking.</p>
    </Split>
  );
}

function GoSlide({ week }: { week: Week }) {
  return (
    <Split week={week} width="w-1/4 px-12">
      <Kicker index={7}>Missional challenge · {week.word}</Kicker>
      <p
        className={cn(
          "mt-8 leading-snug",
          sizeByLength(week.mission, [[220, "text-4xl"], [270, "text-3xl"]], "text-3xl"),
        )}
      >
        {week.mission}
      </p>
      <p className="mt-auto text-2xl font-semibold">Name someone far from Jesus before you pray.</p>
    </Split>
  );
}

function PraySlide({ week }: { week: Week }) {
  return (
    <Split week={week} width="w-1/4 px-12">
      <Kicker index={8}>Pray · {week.word}</Kicker>
      <ol className="mt-10 space-y-8 text-4xl leading-snug">
        {week.pray.map((line, i) => (
          <li key={line}>
            <span className="font-display font-semibold">{i + 1}. </span>
            {line}
          </li>
        ))}
      </ol>
      <p className="mt-auto text-2xl text-muted">Leave silence between these.</p>
    </Split>
  );
}
