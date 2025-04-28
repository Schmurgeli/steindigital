import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Mountain landscape with person on cliff"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            EXPLORE
            <span className="text-green-400"> DIGITAL</span>
            <br />
            SOLUTIONS
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Innovative digital strategies to help your business navigate the digital landscape and reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
