const MOVES = [
  ["Icebreaker", "7 min", "A light question tied to the picture. People may pass."],
  ["The word", "8 min", "Look at the drawing, read the definition, say the memory verse, open the card."],
  ["Open the Bible", "15 min", "A passage they did not already journal. Read it aloud. Ask what it says."],
  ["Around the room", "20 min", "Three new questions. Stay curious. Do not reteach the devotion."],
  ["Say it", "5 min", "Two volunteers put the word into one sentence a friend could understand."],
  ["Go", "5 min", "Name someone far from Jesus. Give the week’s challenge: one action, and one true sentence."],
  ["Pray", "8 min", "Three prompts, and the person just named. Leave silence. Do not reread the book’s prayer."],
];

export function HowTo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-display text-3xl font-semibold tracking-tight">How to lead the hour</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed">
          Plan on 60 to 75 minutes. The book is a 30-day devotion. This guide is 30 gatherings — one word a week.
          Everyone should already have read that day and sat with its reflection questions. If they have not, still
          use this guide. Do not switch back to the journal prompts. Those were for the quiet hour. These are for the
          room.
        </p>
      </section>

      <section>
        <h3 className="font-display text-2xl font-semibold">The shape of a strong hour</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          The rhythm is borrowed from three guides that already work in real rooms.{" "}
          <span className="text-ink">The Gospel-Centered Life</span> moves from the text to the heart and will not let
          application outrun Christ. <span className="text-ink">Knowing the Bible</span> makes a group say what a
          passage actually says before anyone applies it. <span className="text-ink">Gospel in Life</span> opens with
          a human question, stays in Scripture, and ends in prayer instead of homework that repeats the reading. This
          guide assumes the reading is done. The hour is a new passage, a conversation, and a sending.
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {MOVES.map(([title, time, body], i) => (
            <li key={title} className="rounded-card border border-line bg-elevated p-4">
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                {i + 1} · {time}
              </p>
              <p className="font-display mt-1 text-xl font-semibold">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {!compact && (
        <>
          <section className="max-w-2xl space-y-3 leading-relaxed">
            <h3 className="font-display text-2xl font-semibold">Before you walk in</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Read the day in The Visual Gospel yourself. Do not summarize the essay back to people who read it.</li>
              <li>Read the gathering’s passage in your own Bible. The excerpt in the guide is a backup, not a replacement.</li>
              <li>Skim “Before you stumble.” The hard weeks — wrath, depravity, propitiation, election — have a line you can say without starting a debate.</li>
              <li>Have the drawing ready: the book, a printed page, or a screen. Have Bibles in the room. Phones are for the card, then they go down.</li>
            </ul>
          </section>
          <section className="max-w-2xl space-y-3 leading-relaxed">
            <h3 className="font-display text-2xl font-semibold">How to ask</h3>
            <p>
              Ask the question, then wait. Eight seconds feels long and is not long enough. When an answer is fuzzy,
              ask “Where do you see that in the passage?” instead of giving a speech. If someone answers the journal
              question from the book, thank them and return to the question in front of you. You are a facilitator.
              The text teaches.
            </p>
            <p>
              Questions marked <span className="font-semibold text-ink">Core</span> are the ones to keep if you only
              have 45 minutes: one voice on the icebreaker, the verse said together, the passage read aloud, the Core
              questions, the missional challenge, and a short prayer.
            </p>
          </section>
          <section className="max-w-2xl space-y-3 leading-relaxed">
            <h3 className="font-display text-2xl font-semibold">The picture and the cards</h3>
            <p>
              Show the drawing and give the room ten quiet seconds. Then use the short script under the picture if you
              need words. After that, open{" "}
              <a className="underline decoration-line-strong underline-offset-2" href="https://cards.visualgospelbook.com/">
                cards.visualgospelbook.com
              </a>
              , find the week’s word, and say the word, the definition, and the verse together once. Review two older
              cards if you are past week four and the room is willing. Then close it.
            </p>
          </section>
          <section className="max-w-2xl space-y-3 leading-relaxed">
            <h3 className="font-display text-2xl font-semibold">Students, families, and a shorter night</h3>
            <p>
              With students, use the icebreaker, the picture, the verse, the missional challenge, and the line marked
              for youth in the leader notes. Drop the second “from the passage” question if energy falls. At a family
              table, read the passage, ask one Core question, name one person to bless, and pray the first prompt.
              Nobody needs all seven movements to have met with God.
            </p>
          </section>
          <section className="max-w-2xl space-y-3 leading-relaxed">
            <h3 className="font-display text-2xl font-semibold">A note on the hard words</h3>
            <p>
              Wrath is not God losing His temper. Depravity means we cannot save ourselves, not that every person is as
              bad as possible or that their sadness is spiritual death. Propitiation means wrath landed on Christ, and
              it is received by faith — do not tell a room that everyone is already safe, and do not shrink the cross
              to your circle. Justification is a declaration, not the slow work of sanctification. Election, in week
              30, is taught after the welcome of Christ is clear: whoever comes to Him, He will never cast out. The
              leader notes say this again where it matters. Read them. Do not read them aloud.
            </p>
          </section>
        </>
      )}
    </div>
  );
}
