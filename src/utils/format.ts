const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return usd.format(amount);
}

/** Orders at or above this subtotal ship free within the US. */
export const FREE_SHIPPING_THRESHOLD = 250;
export const STANDARD_SHIPPING = 12;
export const EXPRESS_SHIPPING = 28;

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
