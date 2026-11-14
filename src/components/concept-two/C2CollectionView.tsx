"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cx } from "@/utils/format";
import type { Product } from "@/utils/types";
import { C2ProductCard } from "./C2ProductCard";

type Filter = "all" | "new" | "eid" | "everyday";
type Sort = "featured" | "price-asc" | "price-desc";
type View = "editorial" | "grid";

const FILTERS: Record<Filter, string> = {
  all: "All",
  new: "New",
  eid: "Occasion",
  everyday: "Everyday",
};

const SORTS: Record<Sort, string> = {
  featured: "Featured",
  "price-asc": "Price, low to high",
  "price-desc": "Price, high to low",
};

/**
 * Editorial view lays the range out like a lookbook: one large frame and
 * one small, then a row of three, repeating.
 */
const EDITORIAL = [
  { span: "lg:col-span-7", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  { span: "lg:col-span-4 lg:col-start-9 lg:mt-48", aspect: "aspect-[3/4]", sizes: "(min-width: 1024px) 33vw, 50vw" },
  { span: "lg:col-span-4", aspect: "aspect-[3/4]", sizes: "(min-width: 1024px) 33vw, 50vw" },
  { span: "lg:col-span-4 lg:mt-24", aspect: "aspect-[3/4]", sizes: "(min-width: 1024px) 33vw, 50vw" },
  { span: "lg:col-span-4", aspect: "aspect-[3/4]", sizes: "(min-width: 1024px) 33vw, 50vw" },
];

export function C2CollectionView({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [view, setView] = useState<View>("editorial");

  const visible = useMemo(() => {
    const filtered = products.filter((product) =>
      filter === "all"
        ? true
        : filter === "new"
          ? product.isNew
          : product.collections.includes(filter),
    );
    if (sort === "price-asc") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [products, filter, sort]);

  return (
    <div>
      <div className="c2-caps flex flex-col gap-5 border-y border-c2-sand/70 py-5 md:flex-row md:items-center md:justify-between">
        <div className="c2-noscrollbar -mx-5 flex gap-8 overflow-x-auto px-5 md:mx-0 md:px-0" role="group" aria-label="Filter">
          {(Object.keys(FILTERS) as Filter[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={cx("c2-link shrink-0", filter !== key && "text-c2-taupe hover:text-c2-espresso")}
            >
              {FILTERS[key]}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-10">
          <label className="flex items-center gap-3">
            <span className="text-c2-taupe">Sort</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="c2-caps cursor-pointer bg-transparent py-1"
            >
              {(Object.keys(SORTS) as Sort[]).map((key) => (
                <option key={key} value={key}>
                  {SORTS[key]}
                </option>
              ))}
            </select>
          </label>
          <div className="hidden items-center gap-4 lg:flex" role="group" aria-label="Layout">
            <span className="text-c2-taupe">View</span>
            {(["editorial", "grid"] as View[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setView(key)}
                aria-pressed={view === key}
                className={cx("c2-link", view !== key && "text-c2-taupe hover:text-c2-espresso")}
              >
                {key === "editorial" ? "Lookbook" : "Grid"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="py-6 text-sm text-c2-umber" aria-live="polite">
        {visible.length} {visible.length === 1 ? "thobe" : "thobes"}
      </p>

      {visible.length === 0 ? (
        <div className="py-28 text-center">
          <p className="c2-h3 italic">Nothing in this edit yet.</p>
          <button type="button" onClick={() => setFilter("all")} className="c2-caps c2-link c2-link-on mt-6">
            Show all thobes
          </button>
        </div>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={`${view}-${filter}-${sort}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={cx(
              "grid gap-x-4 gap-y-14 md:gap-x-6",
              view === "editorial"
                ? "grid-cols-2 lg:grid-cols-12 lg:gap-y-28"
                : "grid-cols-2 lg:grid-cols-4 lg:gap-y-20",
            )}
          >
            {visible.map((product, index) => {
              const frame = EDITORIAL[index % EDITORIAL.length];
              const lead = view === "editorial" && index % EDITORIAL.length === 0;
              return (
                <li
                  key={product.id}
                  className={view === "editorial" ? cx(frame.span, lead && "col-span-2") : undefined}
                >
                  <C2ProductCard
                    product={product}
                    priority={index < 2}
                    aspect={view === "editorial" ? frame.aspect : "aspect-[3/4]"}
                    sizes={view === "editorial" ? frame.sizes : "(min-width: 1024px) 25vw, 50vw"}
                  />
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
}
