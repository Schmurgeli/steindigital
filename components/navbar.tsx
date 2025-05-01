"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./language-provider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <header className="fixed w-full bg-white/5 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/steindigital_logo.svg"
            alt="SteinDigital Logo"
            width={200}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-[#459a35] hover:text-green-500 font-medium transition-colors">
            {t("nav.home")}
          </Link>
          <a
            href="#features"
            onClick={(e) => handleScroll(e, "#features")}
            className="text-[#459a35] hover:text-green-500 font-medium transition-colors cursor-pointer"
          >
            {t("nav.services")}
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="text-[#459a35] hover:text-green-500 font-medium transition-colors cursor-pointer"
          >
            {t("nav.about")}
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="text-[#459a35] hover:text-green-500 font-medium transition-colors cursor-pointer"
          >
            {t("nav.contact")}
          </a>
        </nav>

        <div className="hidden md:block">
          <button
            onClick={toggleLanguage}
            className="bg-[#459a35] hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer"
          >
            {t("nav.language")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#459a35]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-900 hover:text-green-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "#features")}
              className="text-gray-900 hover:text-green-600 font-medium transition-colors cursor-pointer"
            >
              {t("nav.services")}
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="text-gray-900 hover:text-green-600 font-medium transition-colors cursor-pointer"
            >
              {t("nav.about")}
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="text-gray-900 hover:text-green-600 font-medium transition-colors cursor-pointer"
            >
              {t("nav.contact")}
            </a>
            <button
              onClick={toggleLanguage}
              className="bg-[#459a35] hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer inline-block w-fit"
            >
              {t("nav.language")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
