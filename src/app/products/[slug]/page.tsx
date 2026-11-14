import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { C2ProductCard } from "@/components/concept-two/C2ProductCard";
import { C2ProductView } from "@/components/concept-two/C2ProductView";
import { C2 } from "@/components/concept-two/links";
import { getProductBySlug, getProducts, getRelatedProducts } from "@/utils/catalog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ConceptTwoProduct({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product, 3).filter((item) => item.category === product.category);

  return (
    <>
      <div className="c2-shell-lg lg:pt-6">
        <nav aria-label="Breadcrumb" className="c2-caps hidden pb-6 text-c2-umber lg:block">
          <Link href={C2.collection(product.category)} className="c2-link">
            Back to {product.category}
          </Link>
        </nav>
        <C2ProductView product={product} />
      </div>

      <section className="c2-shell pb-28 pt-28 md:pb-44 md:pt-44" aria-labelledby="c2-related">
        <h2 id="c2-related" className="c2-h2 mb-10 md:mb-16">
          More <span className="italic">for {product.category}</span>
        </h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-3">
          {related.map((item, index) => (
            <li key={item.id} className={index === 1 ? "lg:mt-20" : index === 2 ? "hidden lg:block" : undefined}>
              <C2ProductCard product={item} sizes="(min-width: 1024px) 33vw, 50vw" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
