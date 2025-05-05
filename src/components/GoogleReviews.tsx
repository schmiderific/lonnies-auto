// components/GoogleReviews.tsx

import { useEffect, useState } from 'react'

const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

interface Review {
  author_name: string
  rating: number
  text: string
  time: string
}

function truncateAtWord(text:string, maxLength:number) {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  return truncated.replace(/\s+\S*$/, '') + ' …';
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchReviews = async () => {
        try {
          const response = await fetch(`/api/get-reviews`);
          const data = await response.json();
          setReviews(data.reviews);
          console.log(`OVERALL RATING ${Object.keys(data)}`);
        } catch (error) {
          console.error('Error fetching reviews:', error);
        } finally {
          setLoading(false)
        }
      };
    fetchReviews()
  }, [])

  if (loading) return <p>Loading reviews...</p>
  if (reviews.length === 0) return <p>No reviews found.</p>

  return (
<section className="py-5 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-2 py-5">
    <a
      href={`https://search.google.com/local/writereview?placeid=${placeId}`} 
      className="text-blue-900 font-semibold hover:text-amber-600 transition-all duration-200">
        What our Customer's Say
        </a>
  </h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {reviews.slice(0, 5).map((review, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md">
        {/* Stars above reviewer name */}
        <div className="flex flex-col items-center mb-2">
          <div className="text-yellow-500 text-lg mb-1">
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
          </div>
          <div className="text-lg font-semibold">{review.author_name}</div>
        </div>
        <p className="text-gray-800 text-center">
          {truncateAtWord(review.text, 75)}
        </p>
        <div className="mt-4 text-sm text-gray-600 text-center">
          {new Date(Number(review.time) * 1000).toLocaleDateString()}
        </div>
      </div>
    ))}
  </div>
</section>
  )
}





