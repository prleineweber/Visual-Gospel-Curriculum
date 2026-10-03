import type { Part, Week } from "./types";
import { weeksA } from "./weeks-a";
import { weeksB } from "./weeks-b";
import { weeksC } from "./weeks-c";

export type { Part, PartId, Prompt, Week } from "./types";

export const WEEKS: Week[] = [...weeksA, ...weeksB, ...weeksC];

export const PARTS: Part[] = [
  {
    id: 1,
    roman: "I",
    title: "God’s Heart",
    subtitle: "What God is like, before we make the story about our crisis.",
    weeks: [1, 2, 3, 4],
    open: "For four weeks, do not start with the problem. Start with God. Creation, love, mercy, and grace are not warm-up acts for the gospel. They are the God of the gospel. If the room wants to rush to the cross, let them feel the wait.",
  },
  {
    id: 2,
    roman: "II",
    title: "Our Problem",
    subtitle: "What went wrong, and why good news is necessary.",
    weeks: [5, 6, 7, 8, 9],
    open: "The feast only makes sense if we were starving, and worse than starving. These five weeks tell the truth about sin, death, wrath, judgment, and a real guilty verdict. Do not soften them into low self-esteem. Do not leave the room without pointing at Christ.",
  },
  {
    id: 3,
    roman: "III",
    title: "Christ’s Work",
    subtitle: "What Jesus did. The long center of the study.",
    weeks: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    open: "Everything before this asked why we need a Savior. These weeks answer with a Person. Incarnation through covenant: He came, He announced, He saved, He died, He stands between, He bought, He made peace, He canceled the debt, and He bound Himself by blood.",
  },
  {
    id: 4,
    roman: "IV",
    title: "The Spirit’s Role",
    subtitle: "How the gospel gets inside a person and starts to show.",
    weeks: [21, 22, 23, 24, 25, 26, 27],
    open: "Christ’s work is finished. It is not automatic wallpaper. The Spirit gives life, marks, adopts, delivers, and brings people to faith and repentance, then keeps making them like Jesus. These weeks are about how the news becomes a person.",
  },
  {
    id: 5,
    roman: "V",
    title: "Our Future",
    subtitle: "Where the story is going, and why it was never fragile.",
    weeks: [28, 29, 30],
    open: "Hope, glory, and the choice of God before the world began. We end here not because election is an afterthought, but because after twenty-nine facets the room can finally hear it as assurance instead of as an argument. The Lamb wrote the book. We did not.",
  },
];

export function weekByNumber(n: number): Week | undefined {
  return WEEKS.find((w) => w.n === n);
}

export function partOf(week: Week): Part {
  const part = PARTS.find((p) => p.id === week.part);
  if (!part) throw new Error(`Missing part ${week.part}`);
  return part;
}

export function isPartStart(week: Week): boolean {
  return partOf(week).weeks[0] === week.n;
}

export function artSrc(n: number): string {
  return `/art/${String(n).padStart(2, "0")}.jpg`;
}

export function weekFileBase(week: Week): string {
  const slug = week.word.toLowerCase().replace(/[^a-z0-9]+/g, "");
  return `week-${String(week.n).padStart(2, "0")}-${slug}`;
}
