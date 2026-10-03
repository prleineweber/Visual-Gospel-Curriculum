import { createFileRoute, notFound } from "@tanstack/react-router";
import { weekByNumber } from "@/data";
import { Slide, slideIndex } from "@/components/guide/Slide";

type Search = { s?: number };

export const Route = createFileRoute("/slide/$week")({
  validateSearch: (search: Record<string, unknown>): Search => {
    if (search.s == null || search.s === "") return {};
    return { s: slideIndex(search.s) };
  },
  loader: ({ params }) => {
    const week = weekByNumber(Number(params.week));
    if (!week) throw notFound();
    return week;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.word} — slide` }] : [{ title: "Slide" }],
  }),
  component: ExportSlide,
});

function ExportSlide() {
  const week = Route.useLoaderData();
  const { s } = Route.useSearch();
  return (
    <main className="bg-paper">
      <Slide week={week} index={(s ?? 1) - 1} />
    </main>
  );
}
