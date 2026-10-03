import { artSrc, partOf, type Week } from "@/data";

export function Slide({ week }: { week: Week }) {
  const part = partOf(week);

  return (
    <div className="slide-frame">
      <article className="slide-canvas">
        <div className="flex w-2/5 items-center justify-center px-16 py-16">
          <img
            src={artSrc(week.n)}
            alt={week.alt}
            className="max-h-full max-w-full border border-line bg-elevated object-contain"
          />
        </div>
        <div className="flex w-3/5 flex-col pr-20 py-16">
          <p className="text-lg font-semibold tracking-widest text-muted uppercase">
            Week {week.n} of 30
            <span className="mx-3">·</span>
            Part {part.roman}
            <span className="mx-3">·</span>
            {part.title}
          </p>
          <h1 className="font-display mt-4 text-7xl leading-none font-semibold tracking-tight">{week.word}</h1>
          <p className="mt-4 text-xl leading-snug text-muted">{week.language}</p>
          <p className="mt-8 text-3xl leading-snug">{week.definition}</p>
          <div className="mt-8 border-l-4 border-ink pl-6">
            <p className="text-sm font-semibold tracking-widest text-muted uppercase">Memory verse</p>
            <p className="mt-2 text-2xl leading-snug">{week.verse}</p>
            <p className="mt-3 text-lg font-semibold">{week.ref}</p>
          </div>
          <div className="mt-auto border-t border-line pt-6">
            <p className="text-sm font-semibold tracking-widest text-muted uppercase">Say it together</p>
            <p className="mt-2 text-2xl leading-snug">{week.say}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
