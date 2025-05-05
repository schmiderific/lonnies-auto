// components/Testimonials.tsx
import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanityClient'

interface Testimonial {
  _id: string
  name: string
  review: string
  rating: number
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    sanityClient
      .fetch<Testimonial[]>(`*[_type == "testimonial"]{_id, name, review, rating}`)
      .then(setTestimonials)
  }, [])

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t._id} className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-800 italic">“{t.review}”</p>
            <div className="mt-4 text-sm text-gray-600">— {t.name}</div>
            <div className="text-yellow-500">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
