// Home.tsx
import { Helmet } from "react-helmet";

export default function Home() {
    return (
    <>
        <Helmet>
            <title>Home Page Title</title>
            <meta name="description" content="This is the home page description." />
            <meta property="og:title" content="Home Page Title" />
            {/* Add more meta tags as needed */}
        </Helmet>
        <section class="relative bg-gray-100 p-8 rounded-lg shadow mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
                Reliable Auto Repair, Right Around the Corner
            </h1>
            <p class="text-lg text-gray-700 mb-6">
                Serving your community with honest, top-quality service. Same-day appointments available!
            </p>
            <a href="#contact" class="inline-block bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
                Schedule an Appointment
            </a>
            </div>
            <div>
            <img src="/images/auto-repair.jpg" alt="Auto Repair Shop" class="rounded-lg w-full h-auto shadow" />
            </div>
        </div>
        </section>
        <section id="services" class="py-12 bg-white">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Our Services</h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">Brake Repair</h3>
            <p class="text-gray-700">We offer expert diagnostics and fast brake repairs using quality parts you can trust.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">Oil Changes</h3>
            <p class="text-gray-700">Quick, clean, and affordable oil changes to keep your engine running smoothly.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">Diagnostics</h3>
            <p class="text-gray-700">Using state-of-the-art tools to identify and solve car problems fast.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">Tire Services</h3>
            <p class="text-gray-700">Tire rotations, repairs, and replacements to extend tire life and improve safety.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">Scheduled Maintenance</h3>
            <p class="text-gray-700">Stay ahead of costly repairs with regular maintenance tailored to your vehicle.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">AC & Heating</h3>
            <p class="text-gray-700">Make sure your cabin stays cool in summer and warm in winter with expert HVAC service.</p>
            </div>
        </div>
        </section>
        <section id="reviews" class="py-12 bg-gray-100">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">What Our Customers Say</h2>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-gray-700 italic">“Absolutely the best experience I’ve had at a repair shop. Honest and quick!”</p>
                <p class="mt-4 font-semibold text-blue-700">– Sarah L.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-gray-700 italic">“They diagnosed my issue in minutes and had me back on the road same day.”</p>
                <p class="mt-4 font-semibold text-blue-700">– Mike D.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                <p class="text-gray-700 italic">“Professional and friendly. My go-to shop from now on.”</p>
                <p class="mt-4 font-semibold text-blue-700">– Dana R.</p>
                </div>
            </div>
        </section>
    </>);
  }