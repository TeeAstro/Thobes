import Link from "next/link";
import { getProductsByCategory } from "@/utils/catalog";
import type { Category } from "@/utils/types";
import { C2CollectionView } from "./C2CollectionView";
import { C2 } from "./links";

const COPY: Record<Category, { title: string; italic: boolean; text: string }> = {
  men: {
    title: "Men",
    italic: false,
    text: "Six cuts, from the formal white thobe to easy colour for the week. Sized by finished length, 52 to 62 inches.",
  },
  women: {
    title: "Women",
    italic: true,
    text: "Embroidered pieces for the occasion and fluid shapes for every day. Sized by finished length, 50 to 58 inches.",
  },
};

/** Shared by /concept-two/men and /concept-two/women. */
export function C2CollectionPage({ category }: { category: Category }) {
  const copy = COPY[category];
  const other: Category = category === "men" ? "women" : "men";

  return (
    <div className="c2-shell pb-28 md:pb-44">
      <header className="grid items-end gap-6 pb-10 pt-10 md:pb-16 md:pt-16 lg:grid-cols-12">
        <h1 className={`c2-display lg:col-span-7 ${copy.italic ? "italic" : ""}`}>{copy.title}</h1>
        <div className="lg:col-span-4 lg:col-start-9 lg:pb-4">
          <p className="max-w-sm text-base leading-relaxed text-c2-umber">{copy.text}</p>
          <Link href={C2.collection(other)} className="c2-caps c2-link c2-link-on mt-6">
            View {other}
          </Link>
        </div>
      </header>
      <C2CollectionView products={getProductsByCategory(category)} />
    </div>
  );
}
