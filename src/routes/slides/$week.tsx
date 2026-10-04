import { createFileRoute, notFound } from "@tanstack/react-router";
import { weekByNumber } from "@/data";
import { Deck } from "@/components/guide/Deck";
import { Shell } from "@/components/guide/Shell";
import { slideIndex } from "@/components/guide/Slide";
import { pageHead } from "@/lib/seo";

type Search = { s?: number };

export const Route = createFileRoute("/slides/$week")({
  validateSearch: (search: Record<string, unknown>): Search => {
    if (search.s == null || search.s === "") return {};
    return { s: slideIndex(search.s) };
  },
  loader: ({ params }) => {
    const week = weekByNumber(Number(params.week));
    if (!week) throw notFound();
    return week;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `Slides · ${loaderData.word} — The Visual Gospel`,
          description: `Project the ${loaderData.word} lesson.`,
          path: `/week/${loaderData.n}`,
          index: false,
        })
      : { meta: [{ title: "Slides — The Visual Gospel" }, { name: "robots", content: "noindex,follow" }] },
  component: SlidePage,
  notFoundComponent: Missing,
});

function SlidePage() {
  const week = Route.useLoaderData();
  const { s } = Route.useSearch();
  return (
    <Shell>
      <Deck week={week} slide={s ?? 1} />
    </Shell>
  );
}

function Missing() {
  return (
    <Shell>
      <main className="mx-auto max-w-xl px-4 py-16">
        <h1 className="font-display text-4xl font-semibold">That week is not in the deck.</h1>
      </main>
    </Shell>
  );
}
