/** Every URL in the site, in one place. */
export const C2 = {
  home: "/",
  men: "/men",
  women: "/women",
  story: "/#story",
  checkout: "/checkout",
  product: (slug: string) => `/products/${slug}`,
  collection: (category: "men" | "women") => `/${category}`,
} as const;
