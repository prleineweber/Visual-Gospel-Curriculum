import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/guide/Home";
import { Shell } from "@/components/guide/Shell";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Shell>
      <Home />
    </Shell>
  );
}
