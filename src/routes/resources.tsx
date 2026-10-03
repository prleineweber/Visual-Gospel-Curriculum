import { createFileRoute } from "@tanstack/react-router";
import { Resources } from "@/components/guide/Resources";
import { Shell } from "@/components/guide/Shell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [{ title: "Resources — The Visual Gospel Leader Guide" }],
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
