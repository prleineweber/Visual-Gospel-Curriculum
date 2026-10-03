import { createFileRoute, notFound } from "@tanstack/react-router";
import { weekByNumber } from "@/data";
import { Deck } from "@/components/guide/Deck";
import { Shell } from "@/components/guide/Shell";

export const Route = createFileRoute("/slides/$week")({
  loader: ({ params }) => {
    const week = weekByNumber(Number(params.week));
    if (!week) throw notFound();
    return week;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [{ title: `Slide ${loaderData.n} · ${loaderData.word} — The Visual Gospel` }]
      : [{ title: "Slides — The Visual Gospel" }],
  }),
  component: SlidePage,
  notFoundComponent: Missing,
});

function SlidePage() {
  const week = Route.useLoaderData();
  return (
    <Shell>
      <Deck week={week} />
    </Shell>
  );
}

function Missing() {
  return (
    <Shell>
      <main className="mx-auto max-w-xl px-4 py-16">
        <h1 className="font-display text-4xl font-semibold">That slide is not in the deck.</h1>
      </main>
    </Shell>
  );
}
