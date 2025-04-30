// components/ShopInfo.tsx
import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanityClient'

interface ShopInfo {
  name: string
  address: string
  phone: string
  email: string
  googleMapsUrl: string
}

export default function ShopInfo() {
  const [info, setInfo] = useState<ShopInfo | null>(null)

  useEffect(() => {
    sanityClient.fetch<ShopInfo>(`*[_type == "shopInfo"][0]`).then(setInfo)
  }, [])

  if (!info) return null

  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-2xl font-bold">{info.name}</h2>
      <p className="text-gray-600">{info.address}</p>
      <p className="text-gray-600">Phone: {info.phone}</p>
      <p className="text-gray-600">Email: {info.email}</p>
      <a
        href={info.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on Google Maps
      </a>
    </section>
  )
}
