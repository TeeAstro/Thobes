"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { cx, formatPrice } from "@/utils/format";
import type { Product } from "@/utils/types";
import { C2 } from "./links";

interface Props {
  product: Product;
  sizes?: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Product tile with quick add. On desktop the length row slides up on
 * hover; on touch screens the "Add" button opens it.
 */
export function C2ProductCard({
  product,
  sizes = "(min-width: 1024px) 25vw, 50vw",
  aspect = "aspect-[3/4]",
  priority,
  className,
}: Props) {
  const { add } = useCart();
  const [open, setOpen] = useState(false);
  const [first, second] = product.images;
  const colour = product.colours[0];

  return (
    <article className={cx("group relative", className)}>
      <div className={cx("c2-zoom relative overflow-hidden bg-c2-stone", aspect)}>
        <Link href={C2.product(product.slug)} aria-label={product.name} className="absolute inset-0">
          <Image src={first} alt={product.name} fill sizes={sizes} priority={priority} className="object-cover" />
          {second && (
            <Image
              src={second}
              alt=""
              fill
              sizes={sizes}
              className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
        </Link>

        {product.isNew && (
          <span className="c2-caps pointer-events-none absolute left-3 top-3 text-c2-bone mix-blend-difference">
            New
          </span>
        )}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className={cx(
            "c2-caps absolute bottom-3 right-3 bg-c2-bone/90 px-3 py-2 backdrop-blur-sm lg:hidden",
            open && "hidden",
          )}
        >
          Add
        </button>

        <div
          className={cx(
            "absolute inset-x-0 bottom-0 bg-c2-bone/92 px-3 py-3 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-full opacity-0 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:pointer-events-auto lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100",
          )}
        >
          <p className="c2-caps mb-2 text-c2-umber">Quick add, length in inches</p>
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => {
                  add(product, { size, colour: colour?.name, image: (colour?.images ?? product.images)[0] });
                  setOpen(false);
                }}
                aria-label={`Add ${product.name}, length ${size}, to bag`}
                className="min-w-9 px-1.5 py-1.5 text-sm tabular-nums transition-colors hover:bg-c2-espresso hover:text-c2-bone"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="c2-serif text-[1.3rem] leading-tight md:text-2xl">
          <Link href={C2.product(product.slug)}>{product.name.replace(/^The /, "")}</Link>
        </h3>
        <p className="tabular-nums">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-1 text-sm text-c2-umber">
        {product.colours.length > 1
          ? `${product.colours.length} colours`
          : (product.colours[0]?.name ?? "")}
      </p>
    </article>
  );
}
