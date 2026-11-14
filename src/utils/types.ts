/**
 * Storefront types. These mirror the shape of Shopify's Storefront API
 * (product, options, collection) closely enough that swapping the demo
 * catalogue for live data only touches `lib/catalog.ts`.
 */

export type Category = "men" | "women";

export interface ProductColour {
  name: string;
  /** Swatch colour shown in the selector. */
  hex: string;
  /** Broad family used by the shop filter. */
  family: "White" | "Neutral" | "Green" | "Blue" | "Purple" | "Red" | "Black";
  /** Images for this colour. Falls back to the product images. */
  images?: string[];
}

export interface Product {
  id: string;
  /** URL handle, same role as a Shopify product handle. */
  slug: string;
  name: string;
  category: Category;
  /** Price in US dollars. */
  price: number;
  summary: string;
  description: string;
  details: string[];
  images: string[];
  colours: ProductColour[];
  /** Finished length in inches. */
  sizes: string[];
  collections: string[];
  isNew?: boolean;
  /** Lower numbers appear first in the default sort. */
  featuredRank: number;
  createdAt: string;
}

export interface Collection {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
}

export interface CartLine {
  /** Unique per product + colour + size. */
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  colour?: string;
  size?: string;
  quantity: number;
}
