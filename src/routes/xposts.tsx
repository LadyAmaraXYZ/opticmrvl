import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/xposts")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
