import { createFileRoute, notFound } from "@tanstack/react-router";
import { weekByNumber } from "@/data";
import { Shell } from "@/components/guide/Shell";
import { WeekBody } from "@/components/guide/WeekBody";

export const Route = createFileRoute("/week/$week")({
  loader: ({ params }) => {
    const n = Number(params.week);
    const week = weekByNumber(n);
    if (!week) throw notFound();
    return week;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [{ title: `Week ${loaderData.n} · ${loaderData.word} — Leader Guide` }]
      : [{ title: "Leader Guide" }],
  }),
  component: WeekPage,
  notFoundComponent: Missing,
});

function WeekPage() {
  const week = Route.useLoaderData();
  return (
    <Shell>
      <main className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-10">
        <WeekBody week={week} />
      </main>
    </Shell>
  );
}

function Missing() {
  return (
    <Shell>
      <main className="mx-auto max-w-xl px-4 py-16">
        <h1 className="font-display text-4xl font-semibold">That week is not in the guide.</h1>
        <p className="mt-3 text-muted">The study runs from Creation through Election, weeks 1 to 30.</p>
      </main>
    </Shell>
  );
}
