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
<section id="services" className="py-12 bg-white">
<h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
  Our Services
</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
{services.map((s) => (
<div key={s._id} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
    <h3 className="mb-2 text-xl font-semibold text-blue-700">
      {s.title}
    </h3>
    <p className="text-gray-700">
      {s.description}
    </p>
  </div>
          ))}
</div>
</section>
  );
}
