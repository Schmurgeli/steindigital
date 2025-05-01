"use client";

import { useLanguage } from "./language-provider";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/eco-tourism.jpeg"
          alt="Mountain landscape with person on cliff"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-7xl font-bold mb-6">{t("hero.title")}</h1>

          <div className="flex flex-col sm:flex-row gap-4">
          
            <Link
              href="#contact"
              className="bg-[#459a35] hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              scroll={true}
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
