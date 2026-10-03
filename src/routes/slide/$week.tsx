import { createFileRoute, notFound } from "@tanstack/react-router";
import { weekByNumber } from "@/data";
import { Slide } from "@/components/guide/Slide";

export const Route = createFileRoute("/slide/$week")({
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
  return (
    <main className="bg-paper">
      <Slide week={week} />
    </main>
  );
}
