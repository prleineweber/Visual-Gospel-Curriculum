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
      <article className="slide-canvas" style={{ background: "#0d1d34", color: "#f6f3ec" }}>
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

function Stage({ week }: { week: Week }) {
  return (
    <div className="relative h-full w-[860px] shrink-0 bg-[#f3efe6]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 420px 520px at 20% 16%, rgba(90, 122, 156, 0.45), transparent 70%), radial-gradient(ellipse 300px 240px at 80% 90%, rgba(125, 156, 184, 0.25), transparent 70%)",
        }}
      />
      <img
        src={artSrc(week.n)}
        alt={week.alt}
        className="absolute inset-16 h-[calc(100%-8rem)] w-[calc(100%-8rem)] object-contain mix-blend-multiply"
      />
    </div>
  );
}

function Pulpit({
  week,
  index,
  children,
  foot,
}: {
  week: Week;
  index: number;
  children: ReactNode;
  foot?: ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <Stage week={week} />
      <div className="flex min-w-0 flex-1 flex-col px-16 pt-20 pb-12">
        {children}
        <div className="mt-auto flex items-end justify-between gap-8 pt-8">
          <div className="min-w-0 text-[26px] leading-snug text-[#c5d4e4]">{foot}</div>
          <p className="shrink-0 text-lg font-semibold tracking-widest text-[#c5d4e4]">
            {index} / {SLIDE_COUNT}
          </p>
        </div>
      </div>
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-[22px] font-semibold tracking-[0.22em] text-[#c5d4e4] uppercase">{children}</p>;
}

function Rule() {
  return <div className="mt-7 mb-7 h-1 w-20 bg-[#d7e3ef]" />;
}

function WordSlide({ week }: { week: Week }) {
  const part = partOf(week);
  return (
    <Pulpit
      week={week}
      index={1}
      foot={week.language}
    >
      <Kicker>
        Week {week.n} · Part {part.roman}
      </Kicker>
      <h1
        className={cn(
          "font-display mt-4 leading-none font-semibold tracking-tight",
          week.word.length > 12 ? "text-[84px]" : week.word.length > 8 ? "text-[108px]" : "text-[128px]",
        )}
      >
        {week.word}
      </h1>
      <Rule />
      <p
        className={cn(
          "leading-snug",
          sizeByLength(week.definition, [[150, "text-[40px]"], [210, "text-[34px]"]], "text-[30px]"),
        )}
      >
        {week.definition}
      </p>
    </Pulpit>
  );
}

function VerseSlide({ week }: { week: Week }) {
  return (
    <Pulpit week={week} index={2}>
      <Kicker>Memory verse · {week.word}</Kicker>
      <p
        className={cn(
          "font-display mt-8 leading-tight font-semibold",
          sizeByLength(week.verse, [[150, "text-[60px]"], [210, "text-[50px]"]], "text-[44px]"),
        )}
      >
        {week.verse}
      </p>
      <p className="font-display mt-8 text-[34px] text-[#d7e3ef] italic">{week.ref}</p>
    </Pulpit>
  );
}

function IceSlide({ week }: { week: Week }) {
  return (
    <Pulpit week={week} index={3} foot="Short answers. Then open the Bible.">
      <Kicker>Icebreaker · {week.word}</Kicker>
      <p
        className={cn(
          "font-display mt-10 leading-tight font-semibold",
          sizeByLength(week.icebreaker, [[80, "text-[64px]"], [120, "text-[52px]"]], "text-[44px]"),
        )}
      >
        {week.icebreaker}
      </p>
    </Pulpit>
  );
}

function Questions({
  week,
  index,
  kicker,
  items,
}: {
  week: Week;
  index: number;
  kicker: string;
  items: string[];
}) {
  const total = items.reduce((sum, item) => sum + item.length, 0);
  return (
    <Pulpit week={week} index={index}>
      <Kicker>
        {kicker} · {week.word}
      </Kicker>
      <ol className={cn("mt-8 space-y-6", total > 520 ? "text-[32px]" : "text-[36px]")}>
        {items.map((item, i) => (
          <li key={item} className="leading-snug">
            <span className="font-display font-semibold">{i + 1}. </span>
            {item}
          </li>
        ))}
      </ol>
    </Pulpit>
  );
}

function BibleSlide({ week }: { week: Week }) {
  return (
    <Pulpit week={week} index={4} foot="Read it aloud. Ask what it says.">
      <Kicker>Open the Bible · {week.word}</Kicker>
      <h2 className="font-display mt-6 text-[64px] leading-none font-semibold tracking-tight">{week.passageRef}</h2>
      <ol className="mt-8 space-y-6 text-[34px]">
        {week.fromText.map((prompt, i) => (
          <li key={prompt.q} className="leading-snug">
            <span className="font-display font-semibold">{i + 1}. </span>
            {prompt.q}
          </li>
        ))}
      </ol>
    </Pulpit>
  );
}

function TalkSlide({ week }: { week: Week }) {
  return (
    <Questions
      week={week}
      index={5}
      kicker="Around the room"
      items={week.talk.map((prompt) => prompt.q)}
    />
  );
}

function SaySlide({ week }: { week: Week }) {
  return (
    <Pulpit week={week} index={6} foot="Two voices. Then say it without looking.">
      <Kicker>Say it · {week.word}</Kicker>
      <p
        className={cn(
          "font-display mt-10 leading-tight font-semibold",
          sizeByLength(week.say, [[90, "text-[64px]"], [130, "text-[52px]"]], "text-[44px]"),
        )}
      >
        {week.say}
      </p>
    </Pulpit>
  );
}

function GoSlide({ week }: { week: Week }) {
  return (
    <Pulpit week={week} index={7} foot="Name the person. Then tell them the truth.">
      <Kicker>Missional challenge · {week.word}</Kicker>
      <p
        className={cn(
          "mt-8 leading-snug",
          sizeByLength(week.mission, [[160, "text-[40px]"], [220, "text-[34px]"]], "text-[30px]"),
        )}
      >
        {week.mission}
      </p>
    </Pulpit>
  );
}

function PraySlide({ week }: { week: Week }) {
  return (
    <Pulpit week={week} index={8} foot="Pray these out loud. Leave room for others.">
      <Kicker>Pray · {week.word}</Kicker>
      <ol className="mt-8 space-y-6 text-[34px] leading-snug">
        {week.pray.map((line, i) => (
          <li key={line}>
            <span className="font-display font-semibold">{i + 1}. </span>
            {line}
          </li>
        ))}
      </ol>
    </Pulpit>
  );
}
