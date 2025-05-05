// /api/get-reviews.js
import axios from 'axios';

export default async function handler(req, res) {
  const GOOGLE_API_KEY = process.env.VITE_GOOGLE_API_KEY;
  const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: GOOGLE_PLACE_ID,
          fields: 'name,rating,reviews',
          key: GOOGLE_API_KEY,
        },
      }
    );

    // Send only the reviews back to the client
    res.status(200).json({ reviews: response.data.result.reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
