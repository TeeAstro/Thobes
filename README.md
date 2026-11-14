# ATHAR THOBES, Concept 02: contemporary editorial

A standalone interactive prototype of the ATHAR THOBES store (thobes for men and women),
built for client presentation. There is no Shopify connection and no payment processing.
The bag is stored in the browser and the checkout is simulated.

Concept 01 (oxblood and ivory) is a separate project, `athar-thobes`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` then `npm start`.

## Deploy to Vercel

From this folder run `npx vercel`, then `npx vercel --prod`. Or push it to its own GitHub
repository and import that repository in Vercel. Use a separate repository and Vercel
project from Concept 01 so each concept gets its own link.

## Pages

| Address | Page |
|---|---|
| `/` | Homepage |
| `/men` | Men's thobes, lookbook or grid view, filters and sorting |
| `/women` | Women's thobes, same as above |
| `/products/[slug]` | Product details, colour and length selection |
| `/checkout` | Four-step simulated checkout |

The bag is a drawer, available from the header on every page.

## Structure

```
src/
  app/                    layout, pages, globals.css (palette), concept-two.css (type and components)
  components/concept-two/ header, footer, hero, product card, product view, collection view,
                          cart drawer, checkout, newsletter, logo, links
  context/CartContext.tsx bag state, saved to localStorage
  data/                   demo products and collections
  utils/
    catalog.ts            the only place pages read catalogue data from
    types.ts              product and cart types
    format.ts             prices and shipping constants
  fonts/                  Bodoni Moda and Instrument Sans (self-hosted, SIL Open Font License)
public/
  brand/                  official logo files and the traced Arabic mark
  images/                 demonstration photography
```

## Moving to Shopify

Pages never import `src/data` directly. They call the functions in `src/utils/catalog.ts`.
To go live, reimplement those functions with Storefront API queries, replace the store in
`CartContext.tsx` with the Storefront cart API, and send the checkout button to Shopify's
hosted checkout.

## Before this goes public

- **Logo**: `public/brand/athar-mark.png` was traced from a JPG. Replace it with vector artwork.
- **Photography**: every image in `public/images` is an Unsplash stock photograph used as a
  stand-in. See `CREDITS.md`.
- **Copy, prices, sizes and policies** are demonstration content and need the client's sign-off.
