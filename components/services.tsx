import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Services() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Solutions for the Modern World</h2>
            <p className="text-gray-600 mb-8">
              At SteinDigital, we combine cutting-edge technology with creative thinking to deliver digital solutions
              that drive results. Our team of experts is dedicated to helping businesses navigate the digital landscape
              and achieve their goals.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Custom web and mobile application development</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Digital strategy and consulting services</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Data analytics and business intelligence solutions</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Cloud infrastructure and DevOps services</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/eco-tourism.jpeg" alt="Digital solutions in action" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
