const MOVES = [
  ["Icebreaker", "7 min", "A light question tied to the picture. People may pass."],
  ["The Word", "8 min", "Look at the drawing, read the definition, say the memory verse, open the card."],
  ["Open the Bible", "15 min", "A passage they did not already journal. Read it aloud. Ask what it says."],
  ["Around the room", "20 min", "Three new questions. Stay curious. Do not reteach the devotion."],
  ["Say it", "5 min", "Two volunteers put the word into one sentence a friend could understand."],
  ["Go", "5 min", "Name someone far from Jesus. Give the week’s challenge: one action, and one true sentence."],
  ["Pray", "8 min", "Three prayers from the text, and the person just named. Leave room for others to pray out loud."],
];

export function HowTo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-display text-3xl font-semibold tracking-tight">How to lead the hour</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed">
          Plan on 60 to 75 minutes. The book is a 30-day devotion. This guide is 30 gatherings — one word a week.
          Your people should already have read that day. If they have not, still use this guide. Do not switch back
          to the journal prompts. Those were for personal reading. This hour is for opening the Bible together and
          then going to someone who does not know Christ.
        </p>
      </section>

      <section>
        <h3 className="font-display text-2xl font-semibold">The shape of a strong hour</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          Open the Bible and ask what it says before anyone explains what they feel. The text teaches. Then ask what
          we must believe, obey, and tell. Christ stays at the center. Application does not outrun Him. The reading
          is already done. This hour is a new passage, a clear conversation, and a sending.
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
              Ask the question, then wait long enough for someone besides you to answer. When an answer is fuzzy,
              ask “Where do you see that in the passage?” Do not give a speech. If someone repeats the journal
              question from the book, thank them and come back to the question in front of you. You are not the
              teacher of a new idea. The text is. Correct a wrong reading of the verse. Do it kindly, and do it.
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
              Show the drawing. Then use the short script under the picture if you need words. After that, open{" "}
              <a className="underline decoration-line-strong underline-offset-2" href="https://cards.visualgospelbook.com/">
                cards.visualgospelbook.com
              </a>
              , find the week’s word, and say the word, the definition, and the verse together once. The slide deck linked
              at the top of the lesson puts the drawing and definition on the first slide, the memory verse large on
              the second, then one slide for each movement. Review two older cards if you are past week four and the
              room is willing. Then close it.
            </p>
          </section>
          <section className="max-w-2xl space-y-3 leading-relaxed">
            <h3 className="font-display text-2xl font-semibold">Students, families, and a shorter night</h3>
            <p>
              With students, use the icebreaker, the picture, the verse, the missional challenge, and the line marked
              for youth in the leader notes. Drop the second “from the passage” question if attention drops. At a
              family table, read the passage, ask one Core question, name one person far from Jesus, and pray the
              first prompt. You do not need every movement for the Word to do its work.
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
