import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/slides/")({
  beforeLoad: () => {
    throw redirect({ to: "/slides/$week", params: { week: "1" } });
  },
});
