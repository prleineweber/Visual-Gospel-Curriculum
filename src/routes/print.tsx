import { createFileRoute } from "@tanstack/react-router";
import { PrintGuide } from "@/components/guide/PrintGuide";

type Search = { week?: number };

export const Route = createFileRoute("/print")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const raw = Number(search.week);
    if (Number.isInteger(raw) && raw >= 1 && raw <= 30) return { week: raw };
    return {};
  },
  head: () => ({
    meta: [{ title: "Print — The Visual Gospel Leader Guide" }],
  }),
  component: PrintPage,
});

function PrintPage() {
  const { week } = Route.useSearch();
  return <PrintGuide only={week} />;
}
