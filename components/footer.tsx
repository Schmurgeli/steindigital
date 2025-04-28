"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-48 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/steindigital_logo.svg"
                alt="SteinDigital Logo"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.team")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.cookies")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t("footer.gdpr")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} steindigital. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
