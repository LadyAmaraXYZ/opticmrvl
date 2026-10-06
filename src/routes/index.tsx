import { createFileRoute } from "@tanstack/react-router";
import { Optic } from "@/components/optic";

export const Route = createFileRoute("/")({
  component: Optic,
  head: () => ({
    meta: [
      { title: "$OPTIC — The light between them" },
      {
        name: "description",
        content:
          "The processor is not the constraint. The light between them is. A meme paired with the Marvell stock token on Pons. Not the company. Not the share.",
      },
    ],
  }),
});
