"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="SteinDigital Logo" width={200} height={50} className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-900 hover:text-green-500 font-medium transition-colors">
            Home
          </Link>
          <Link href="#services" className="text-gray-900 hover:text-green-500 font-medium transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-gray-900 hover:text-green-500 font-medium transition-colors">
            About Us
          </Link>
          <Link href="#projects" className="text-gray-900 hover:text-green-500 font-medium transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-900 hover:text-green-500 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-900 hover:text-green-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-900 hover:text-green-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#projects"
              className="text-gray-900 hover:text-green-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-900 hover:text-green-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors inline-block w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
