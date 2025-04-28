import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      
      <Contact />
      <Footer />
    </main>
  )
}
