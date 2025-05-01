// Add the component where you want to display reviews, e.g., in index.tsx:

// import GoogleReviews from './components/GoogleReviews'

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to Lonnie's University Auto</h1>
//       <GoogleReviews />
//     </div>
//   )
// }

// Key Details:
// 	•	GOOGLE_API_KEY: Your API key from Google Cloud.
// 	•	PLACE_ID: Find the Place ID from Google’s Place ID Finder.
// 	•	Reviews: The reviews object includes the author’s name, rating, review text, and the time of the review.


// ✅ Step 1: Set Up Google Cloud API
// 	1.	Create a Google Cloud Project:
// 	•	Go to the Google Cloud Console.
// 	•	Create a new project (e.g., “Lonnie’s University Auto”).
// 	2.	Enable the Google Places API:
// 	•	Navigate to APIs & Services > Library.
// 	•	Search for “Places API” and enable it for your project.
// 	3.	Create API Key:
// 	•	Go to APIs & Services > Credentials.
// 	•	Click Create credentials > API key.
// 	•	Restrict the key for security (e.g., set restrictions by HTTP referrers or IPs).



// components/GoogleReviews.tsx

import { useEffect, useState } from 'react'
import axios from 'axios'

interface Review {
  author_name: string
  rating: number
  text: string
  time: string
}

const GOOGLE_API_KEY = 'AIzaSyDz1Cg_1tUcenCBAzIxoUb9QZ4WRz9IbRQ'  // Replace with your actual API key
const PLACE_ID = 'ChIJHcaFz0fhrIkRHeSFhQfeu3g'  // Replace with your Google Place ID

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
        )
        setReviews(response.data.result.reviews)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) return <p>Loading reviews...</p>
  if (reviews.length === 0) return <p>No reviews found.</p>

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Google Reviews</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-lg font-semibold">{review.author_name}</div>
              <div className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
            </div>
            <p className="text-gray-800">{review.text}</p>
            <div className="mt-4 text-sm text-gray-600">{new Date(Number(review.time) * 1000).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </section>
  )
}





