import { type Metadata } from "next";

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
    title: "Delester - The Refreshing Malt Beverage",
    description: "Experience the crisp and refreshing taste of Delester. A perfect non-alcoholic drink for every occasion.",
    openGraph: {
      title: "Delester - The Refreshing Malt Beverage",
      description: "Experience the crisp and refreshing taste of Delester. A perfect non-alcoholic drink for every occasion.",
      images: [{ url: "/og-image.png" }],
    },
  };
}
