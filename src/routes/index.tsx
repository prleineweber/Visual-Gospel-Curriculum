import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/guide/Home";
import { Shell } from "@/components/guide/Shell";
import { homeHead, homeJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...homeHead,
    scripts: [homeJsonLd()],
  }),
  component: Index,
});

function Index() {
  return (
    <Shell>
      <Home />
    </Shell>
  );
}
