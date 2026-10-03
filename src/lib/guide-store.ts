import { create } from "zustand";
import { persist } from "zustand/middleware";

type GuideState = {
  hydrated: boolean;
  groupName: string;
  startDate: string;
  done: number[];
  notes: Record<string, string>;
  hideNotes: boolean;
  setHydrated: (v: boolean) => void;
  setGroupName: (v: string) => void;
  setStartDate: (v: string) => void;
  toggleDone: (n: number) => void;
  setNote: (n: number, v: string) => void;
  setHideNotes: (v: boolean) => void;
};

export const useGuide = create<GuideState>()(
  persist(
    (set) => ({
      hydrated: false,
      groupName: "",
      startDate: "",
      done: [],
      notes: {},
      hideNotes: false,
      setHydrated: (hydrated) => set({ hydrated }),
      setGroupName: (groupName) => set({ groupName }),
      setStartDate: (startDate) => set({ startDate }),
      toggleDone: (n) =>
        set((s) => ({
          done: s.done.includes(n) ? s.done.filter((x) => x !== n) : [...s.done, n].sort((a, b) => a - b),
        })),
      setNote: (n, v) => set((s) => ({ notes: { ...s.notes, [String(n)]: v } })),
      setHideNotes: (hideNotes) => set({ hideNotes }),
    }),
    {
      name: "vg-leader-guide",
      skipHydration: true,
      partialize: (s) => ({
        groupName: s.groupName,
        startDate: s.startDate,
        done: s.done,
        notes: s.notes,
        hideNotes: s.hideNotes,
      }),
    },
  ),
);

export function meetingLabel(start: string, week: number): string | null {
  if (!start) return null;
  const d = new Date(`${start}T12:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  d.setDate(d.getDate() + (week - 1) * 7);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
