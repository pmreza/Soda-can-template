import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  // <SliceZone> renders the page's slices.
  return <SliceZone slices={home.data.slices} components={components} />;
}

export function generateMetadata(): Metadata {
  return {
    title: "Delester - Your Custom Brand",
    description: "The best custom soda in the world.",
    openGraph: {
      title: "Delester - Your Custom Brand",
      description: "The best custom soda in the world.",
      images: [{ url: "/og-image.png" }],
    },
  };
}
