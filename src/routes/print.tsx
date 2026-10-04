import { createFileRoute } from "@tanstack/react-router";
import { PrintGuide } from "@/components/guide/PrintGuide";
import { pageHead } from "@/lib/seo";

type Search = { week?: number };

export const Route = createFileRoute("/print")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const raw = Number(search.week);
    if (Number.isInteger(raw) && raw >= 1 && raw <= 30) return { week: raw };
    return {};
  },
  head: () =>
    pageHead({
      title: "Print — The Visual Gospel Leader Guide",
      description: "Print a week or the full leader guide.",
      path: "/print",
      index: false,
    }),
  component: PrintPage,
});

function PrintPage() {
  const { week } = Route.useSearch();
  return <PrintGuide only={week} />;
}
