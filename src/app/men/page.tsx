import type { Metadata } from "next";
import { C2CollectionPage } from "@/components/concept-two/C2CollectionPage";

export const metadata: Metadata = { title: "Men's thobes" };

export default function ConceptTwoMen() {
  return <C2CollectionPage category="men" />;
}
