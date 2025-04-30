'use client'
import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanityClient'

type Service = {
  _id: string
  title: string
  description: string
  icon?: string
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "service"]{_id, title, description, icon}`)
      .then(setServices)
  }, [])

  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s._id} className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-2">{s.icon || '🛠️'}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
