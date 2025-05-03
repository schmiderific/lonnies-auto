// NEED TO SWITCH TO THIS.  OTHER APPROACH HAS CORS ISSUES

// Use the Featurable API with react-google-reviews (Recommended)
// 	•	No server-side code required
// 	•	No CORS issues
// 	•	Fetches more than 5 reviews
// 	•	Simple React integration
// Install the library:

// npm install react-google-reviews

// Usage in your React component:

// import { ReactGoogleReviews } from "react-google-reviews";
// import "react-google-reviews/dist/index.css";

// function Reviews() {
//   const featurableWidgetId = "YOUR_FEATURABLE_WIDGET_ID"; // Get this from Featurable.com
//   return (
//     <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
//   );
// }

// Sign up at Featurable.com, create a widget, and use the widget ID.



// components/GoogleReviews.tsx

import { useEffect, useState } from 'react'
import axios from 'axios'

interface Review {
  author_name: string
  rating: number
  text: string
  time: string
}


const GOOGLE_API_KEY = 'AIzaSyCUSrwzErPPXGtjzucOcaBm_NW4xi49oHc'  // Replace with your actual API key
// const GOOGLE_API_KEY = 'AIzaSyDz1Cg_1tUcenCBAzIxoUb9QZ4WRz9IbRQ'  // Replace with your actual API key
const PLACE_ID = 'ChIJtdV_BDjhrIkRQsx43uo0vN0'  // Replace with your Google Place ID

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_API_KEY}`
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





