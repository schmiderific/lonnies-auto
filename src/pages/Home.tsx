// Home.tsx
import { Helmet } from "react-helmet";
import Hero from '../components/Hero'
import Services from '../components/Services'

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
      <Services/>
      <section id="reviews" className="py-12 bg-gray-100">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-700 italic">
              “Absolutely the best experience I’ve had at a repair shop. Honest
              and quick!”
            </p>
            <p className="mt-4 font-semibold text-blue-500">– Sarah L.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-700 italic">
              “They diagnosed my issue in minutes and had me back on the road
              same day.”
            </p>
            <p className="mt-4 font-semibold text-blue-500">– Mike D.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-700 italic">
              “Professional and friendly. My go-to shop from now on.”
            </p>
            <p className="mt-4 font-semibold text-blue-500">– Dana R.</p>
          </div>
        </div>
      </section>
    </>
  );
}
