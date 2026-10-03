export type PartId = 1 | 2 | 3 | 4 | 5;

export type Prompt = {
  q: string;
  aim: string;
  /** Keep this if the gathering is cut to about 45 minutes. */
  star?: boolean;
};

export type Week = {
  n: number;
  word: string;
  part: PartId;
  language: string;
  definition: string;
  verse: string;
  ref: string;
  /** What the drawing is doing, for the leader. */
  picture: string;
  /** Two sentences the leader can actually say after a short silence. */
  show: string;
  alt: string;
  icebreaker: string;
  iceAim: string;
  passageRef: string;
  passageWhy: string;
  passage: string;
  fromText: [Prompt, Prompt];
  talk: [Prompt, Prompt, Prompt];
  say: string;
  pray: [string, string, string];
  watch: string;
  youth: string;
  further: string;
  lookBack?: string;
};

export type Part = {
  id: PartId;
  roman: string;
  title: string;
  subtitle: string;
  weeks: number[];
  open: string;
};
