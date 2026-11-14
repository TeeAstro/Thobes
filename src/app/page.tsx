import Image from "next/image";
import Link from "next/link";
import { C2Hero } from "@/components/concept-two/C2Hero";
import { C2Mark } from "@/components/concept-two/C2Logo";
import { C2Newsletter } from "@/components/concept-two/C2Newsletter";
import { C2Parallax } from "@/components/concept-two/C2Parallax";
import { C2ProductCard } from "@/components/concept-two/C2ProductCard";
import { C2 } from "@/components/concept-two/links";
import { getProducts } from "@/utils/catalog";

export default function ConceptTwoHome() {
  const arrivals = getProducts()
    .filter((product) => product.isNew)
    .slice(0, 4);

  return (
    <>
      <C2Hero />

      {/* Men */}
      <section className="c2-shell grid gap-y-8 pt-24 md:pt-40 lg:grid-cols-12" aria-labelledby="c2-men">
        <Link href={C2.men} className="lg:col-span-7" aria-label="Shop men's thobes">
          <div className="c2-zoom relative aspect-[4/5] overflow-hidden bg-c2-stone">
            <Image
              src="/images/madinah-1.jpg"
              alt="A man adjusting the collar of a white thobe against a warm ochre backdrop"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Link>
        <div className="flex flex-col lg:col-span-5 lg:justify-between lg:pl-0">
          <div className="hidden justify-end lg:flex">
            <div className="relative aspect-[3/4] w-[58%] overflow-hidden bg-c2-stone">
              <Image
                src="/images/andalus-2.jpg"
                alt="A man in a wide cream thobe on a rooftop"
                fill
                sizes="22vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative z-10 lg:-ml-[7.5rem] lg:pb-6">
            <h2 id="c2-men" className="c2-display">
              Men
            </h2>
            <div className="mt-6 lg:ml-[9.5rem] lg:max-w-sm">
              <p className="text-base leading-relaxed text-c2-umber">
                Six cuts, from the formal white thobe to easy colour for the week. Sized by length,
                made to fall straight from the shoulder.
              </p>
              <Link href={C2.men} className="c2-caps c2-link c2-link-on mt-7">
                Shop men&apos;s thobes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Women */}
      <section className="c2-shell grid gap-y-8 pt-24 md:pt-40 lg:grid-cols-12" aria-labelledby="c2-women">
        <div className="order-2 flex flex-col lg:order-1 lg:col-span-5 lg:justify-between">
          <div className="hidden lg:block">
            <div className="relative aspect-[3/4] w-[58%] overflow-hidden bg-c2-stone">
              <Image
                src="/images/noor-2.jpg"
                alt="Detail of a gathered sleeve in soft clay-coloured crepe"
                fill
                sizes="22vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative z-10 lg:-mr-[7.5rem] lg:pb-6 lg:text-right">
            <h2 id="c2-women" className="c2-display italic">
              Women
            </h2>
            <div className="mt-6 lg:ml-auto lg:mr-[9.5rem] lg:max-w-sm lg:text-left">
              <p className="text-base leading-relaxed text-c2-umber">
                Embroidered pieces for the occasion and fluid shapes for every day, in stone, taupe,
                blush and black.
              </p>
              <Link href={C2.women} className="c2-caps c2-link c2-link-on mt-7">
                Shop women&apos;s thobes
              </Link>
            </div>
          </div>
        </div>
        <Link href={C2.women} className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6" aria-label="Shop women's thobes">
          <div className="c2-zoom relative aspect-[4/5] overflow-hidden bg-c2-stone">
            <Image
              src="/images/dana-2.jpg"
              alt="Two women in taupe and cream thobes standing in a pale stone archway"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </Link>
      </section>

      {/* New arrivals */}
      <section className="c2-shell pt-28 md:pt-48" aria-labelledby="c2-arrivals">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-16">
          <h2 id="c2-arrivals" className="c2-h2">
            New <span className="italic">arrivals</span>
          </h2>
          <p className="c2-caps hidden text-c2-umber md:block">Autumn 2026</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4">
          {arrivals.map((product, index) => (
            <li key={product.id} className={index % 2 === 1 ? "lg:mt-20" : undefined}>
              <C2ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>

      {/* Editorial story, full width */}
      <section className="relative mt-28 md:mt-48" aria-labelledby="c2-cloth">
        <C2Parallax
          src="/images/c2/story-horizon.jpg"
          alt="A man in a white thobe and shemagh, seen from behind, looking out over a quiet landscape"
          className="h-[70svh] min-h-[26rem] md:h-[92svh]"
        />
        <div className="c2-shell relative">
          <div className="-mt-24 bg-c2-bone px-6 pb-2 pt-10 md:-mt-56 md:ml-auto md:w-[min(44rem,58%)] md:px-14 md:pt-14">
            <h2 id="c2-cloth" className="c2-h2">
              Cloth first. <span className="italic">Everything else follows.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-c2-umber">
              We choose the fabric before we draw the pattern. Each cloth is washed, worn and
              pressed for weeks before it earns a place in the range, and each thobe is cut in
              small runs so the finishing stays in careful hands.
            </p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section id="story" className="c2-shell scroll-mt-24 pt-28 md:pt-48" aria-labelledby="c2-story">
        <div className="grid gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="c2-story" className="c2-caps text-c2-umber">
              Our story
            </h2>
            <C2Mark className="mt-8 w-40 text-c2-burgundy md:w-56" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="c2-h3">
              In Arabic, athar is what remains after someone has passed: a footprint in sand, a
              scent in a room, a good word remembered. We began in Minnesota in 2026 to make
              clothing worthy of that idea.
            </p>
            <div className="mt-10 grid gap-8 text-base leading-relaxed text-c2-umber md:grid-cols-2">
              <p>
                Finding a well-made thobe in the United States used to mean a suitcase favour from
                a relative overseas, or settling for thin cloth and a collar that never sat right.
              </p>
              <p>
                So we make a small range for men and women, in cloth we have worn ourselves, and
                we size it properly: by finished length, in two-inch steps.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-c2-stone md:col-span-4 md:mt-24">
            <Image src="/images/fabric-1.jpg" alt="Folds of white cotton" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-c2-stone md:col-span-5">
            <Image src="/images/tailor-1.jpg" alt="A tailor choosing between cloth swatches" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
          </div>
          <dl className="flex flex-col justify-end gap-7 md:col-span-3">
            {[
              ["Made in small runs", "So every collar and placket is checked by hand."],
              ["Sized by length", "52 to 62 inches for men, 50 to 58 for women."],
              ["Shipped from Minnesota", "Across the United States and worldwide."],
            ].map(([term, text]) => (
              <div key={term}>
                <dt className="c2-serif text-xl">{term}</dt>
                <dd className="mt-1 text-c2-umber">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-28 bg-c2-stone py-24 text-center md:mt-48 md:py-36" aria-labelledby="c2-letters">
        <div className="c2-shell">
          <h2 id="c2-letters" className="c2-h2">
            Letters <span className="italic">from Athar</span>
          </h2>
          <p className="mx-auto mb-10 mt-6 max-w-md text-base text-c2-umber">
            New pieces and limited runs, before anyone else. No more than twice a month.
          </p>
          <C2Newsletter />
        </div>
      </section>
    </>
  );
}
