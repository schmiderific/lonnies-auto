// Home.tsx
import { Helmet } from "react-helmet";
import Hero from '../components/Hero'
import Services from '../components/Services'
import GoogleReviews from '../components/GoogleReviews'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Reliable Auto Repair in Durham, NC | Certified Mechanics & Affordable Service</title>
        <meta property="og:title" content="Reliable Auto Repair in Durham, NC | Certified Mechanics & Affordable Service"/>
        <meta name="description" content="Trust our expert team in Durham, NC for dependable auto repair and maintenance. Certified mechanics, honest pricing, and quality care to keep you on the road."/>
        <meta property="og:description" content="Trust our expert team in Durham, NC for dependable auto repair and maintenance. Certified mechanics, honest pricing, and quality care to keep you on the road."/>

        {/* Add more meta tags as needed */}
      </Helmet>
      <Hero/>
      <div className="bg-blue-900 text-blue-50 text-sm py-4 px-4 font-raleway"/>
      <GoogleReviews/>
      <div className="bg-blue-900 text-blue-50 text-sm py-4 px-4 font-raleway"/>
      <Services/>
    </>
  );
}
