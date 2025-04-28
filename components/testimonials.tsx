import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      quote:
        "SteinDigital transformed our online presence with a stunning website and effective digital marketing strategy. Our customer engagement has increased by 150% since working with them.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      company: "GreenEco Solutions",
      quote:
        "The team at SteinDigital understood our vision perfectly and delivered a mobile app that exceeded our expectations. Their attention to detail and commitment to quality is outstanding.",
      stars: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Innovate Partners",
      quote:
        "Working with SteinDigital has been a game-changer for our business. Their expertise in digital transformation helped us streamline our processes and improve customer satisfaction.",
      stars: 4,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with SteinDigital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
