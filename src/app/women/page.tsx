import type { Metadata } from "next";
import { C2CollectionPage } from "@/components/concept-two/C2CollectionPage";

export const metadata: Metadata = { title: "Women's thobes" };

export default function ConceptTwoWomen() {
  return <C2CollectionPage category="women" />;
}
