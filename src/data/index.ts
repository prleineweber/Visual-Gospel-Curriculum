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
    open: "For four weeks, start with God. Creation, love, mercy, and grace are not a warm-up. They are who He is. Do not rush past Him to get to our problem. The cross will mean more if the room knows the God who gave His Son.",
  },
  {
    id: 2,
    roman: "II",
    title: "Our Problem",
    subtitle: "What went wrong, and why good news is necessary.",
    weeks: [5, 6, 7, 8, 9],
    open: "Good news is only good if the bad news is true. These five weeks name sin, death, wrath, judgment, and a real guilty verdict. Do not shrink them into low self-esteem. Do not end the night without pointing to Christ.",
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
    open: "Christ’s work is finished. It does not land on a person by magic. The Spirit gives life, seals, adopts, and rescues. He brings sinners to faith and repentance, then keeps making them like Jesus. These weeks are about how the gospel gets inside a real person.",
  },
  {
    id: 5,
    roman: "V",
    title: "Our Future",
    subtitle: "Where the story is going, and why it was never fragile.",
    weeks: [28, 29, 30],
    open: "Hope, glory, and God’s choice before the world began. We teach election last so the room hears it as comfort, not as a puzzle. God chose a people in Christ. Whoever comes to Jesus, He will never cast out.",
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
