import Link from "next/link";
import { C2 } from "@/components/concept-two/links";

export default function NotFound() {
  return (
    <div className="c2-shell py-28 md:py-44">
      <h1 className="c2-h2">
        This page <span className="italic">could not be found.</span>
      </h1>
      <p className="mt-5 text-base text-c2-umber">The link may be old, or the piece may have sold out.</p>
      <div className="c2-caps mt-8 flex gap-8">
        <Link href={C2.men} className="c2-link c2-link-on">Shop men</Link>
        <Link href={C2.women} className="c2-link c2-link-on">Shop women</Link>
      </div>
    </div>
  );
}
