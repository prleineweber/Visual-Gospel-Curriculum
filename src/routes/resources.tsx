import { createFileRoute } from "@tanstack/react-router";
import { Resources } from "@/components/guide/Resources";
import { Shell } from "@/components/guide/Shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead({
      title: "Resources — The Visual Gospel Leader Guide",
      description:
        "Buy The Visual Gospel, open the flash card app, and download the free leader guide, weekly lesson PDFs, and slide decks.",
      path: "/resources",
    }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <Shell>
      <Resources />
    </Shell>
  );
}
