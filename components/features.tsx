import { Code, Globe, BarChart, Smartphone } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-green-500" />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-green-500" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-green-500" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence.",
    },
    {
      icon: <Code className="h-10 w-10 text-green-500" />,
      title: "Custom Solutions",
      description: "Tailored digital solutions to meet your specific business needs.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
