"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { C2 } from "./links";

const ease = [0.22, 1, 0.36, 1] as const;

/** Each headline line rises out of a mask, one after the other. */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function C2Hero() {
  return (
    <section className="relative -mt-[var(--c2-nav-h)] h-[100svh] min-h-[36rem] overflow-hidden bg-c2-taupe text-c2-bone">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease }}
      >
        <Image
          src="/images/c2/hero-desert.jpg"
          alt="A man in a white thobe walking alone across a sand dune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_64%]"
        />
      </motion.div>

      <div className="c2-shell relative flex h-full flex-col justify-end pb-10 md:pb-14">
        <h1 className="c2-display">
          <Line delay={0.35}>Leave</Line>
          <Line delay={0.5}>
            <span className="italic">a trace.</span>
          </Line>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-sm text-base leading-relaxed">
            Thobes for men and women, cut in Minnesota for the days worth remembering.
          </p>
          <div className="c2-caps flex gap-9">
            <Link href={C2.men} className="c2-link c2-link-on">Shop men</Link>
            <Link href={C2.women} className="c2-link c2-link-on">Shop women</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
