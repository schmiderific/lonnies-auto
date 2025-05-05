// components/Hours.tsx
import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanityClient'

interface Day {
  day: string
  open: string
  close: string
}

export default function Hours() {
  const [hours, setHours] = useState<Day[]>([])

  useEffect(() => {
    sanityClient.fetch<Day[]>(`*[_type == "hours"][0].days`).then(setHours)
  }, [])

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Hours of Operation</h2>
      <ul className="max-w-md mx-auto divide-y divide-gray-200">
        {hours.map((h, i) => (
          <li key={i} className="py-2 flex justify-between text-gray-700">
            <span>{h.day}</span>
            <span>{h.open} – {h.close}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
