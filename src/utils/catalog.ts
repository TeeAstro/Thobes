import { collections } from "@/data/collections";
import { products } from "@/data/products";
import type { Category, Collection, Product } from "./types";

/**
 * The only place the UI reads catalogue data from.
 * When Shopify is connected, reimplement these functions with
 * Storefront API queries and keep the signatures the same.
 */

export const CATEGORY_LABELS: Record<Category, string> = {
  men: "Men",
  women: "Women",
};

const byFeatured = (a: Product, b: Product) => a.featuredRank - b.featuredRank;

/** Short label shown under a product name. */
export const PRODUCT_TYPE_LABELS: Record<Category, string> = {
  men: "Men's thobe",
  women: "Women's thobe",
};

export function getProducts(): Product[] {
  return [...products].sort(byFeatured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return getProducts().filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = getProducts().filter(
    (p) => p.id !== product.id && p.category === product.category,
  );
  const others = getProducts().filter(
    (p) => p.id !== product.id && p.category !== product.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getCollections(): Collection[] {
  return collections;
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getCollectionProducts(slug: string): Product[] {
  return getProducts().filter((p) => p.collections.includes(slug));
}
