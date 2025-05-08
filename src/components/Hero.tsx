import LonniesShopFront from '../assets/LonniesShopFront.png';
import { useEffect, useState } from "react";

const brandSets = [
  "Volkswagen BMW",
  "Mercedes Audi",
  "Toyota Lexus",
  "Honda Acura",
  "Nissan Infinity",
  "Ford Lincoln",
  "Chrysler Ram Jeep",
  "Chevrolet Cadillac"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % brandSets.length);
    }, 3000); // Change brand set every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
      <section className="bg-gray-100 rounded-lg relative shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-8">
          
            {/* Animated brand display */}
            <div className="mb-10 text-4xl text-center font-bold text-gray-900">
              <span className="font-roboto text-xl font-semibold text-blue-600 transition-opacity duration-700 ease-in-out">
                {brandSets[index]}
              </span>
            </div>

            <h1 className="mb-10 text-4xl text-center font-bold text-gray-900">
              Reliable Auto Repair
              <span className="block">
                Right Around the Corner
              </span>
            </h1>
            <div className="flex justify-center mb-10">
                <a
                href="#contact"
                className="inline-block text-center bg-amber-500 text-white font-semibold py-2 px-4 rounded-xl shadow hover:bg-amber-600 transition"
                >
                Book Appointment
                </a>
            </div>
            <p className="mb-6 text-base text-gray-700">
              Conveniently located in the heart of Durham, right off the 15-501 exit to Hillsborough Road, 
              we’re your{' '}

              <span className="font-bold text-blue-500">
                  trusted, full-service auto repair shop
              </span>. 

              Our experienced team works on{' '}

              <span className="font-bold text-blue-500">
                  domestic, Asian, and German vehicles
              </span>

              -including{' '}

              <span className="font-bold text-blue-500">
                  Volkswagen, BMW, Mercedes, and Audi
              </span>

              -and specializes in cars from 2000 onward. We offer{' '}

              <span className="font-bold text-blue-500">
                  state-of-the-art repairs, tires, alignments, state inspections,
              </span> 

              and{' '}
              
              <span className="font-bold text-blue-500">
                  advanced diagnostics
              </span>-

              all under one roof. Many customers have relied on us for{' '}

              <span className="font-bold text-blue-500">
                  over 20 years
              </span>. 

              With today’s vehicles more advanced than ever, we have the{' '}

              <span className="font-bold text-blue-500">
                  tools and expertise
              </span> 

              to handle even the toughest jobs and keep you on the road.{' '}

              <span className="font-bold text-blue-500">
                  If your check engine light is on, stop by anytime-no appointment needed
              </span>, 

              and we’ll provide a{' '}
              
              <span className="font-bold text-blue-500">
                complimentary diagnostic scan
              </span> 
              
              to quickly assess your vehicle.
            </p>
          </div>
          <div>
            <img
              src={LonniesShopFront}
              alt="Lonnie's Shop Front"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </section>

  );
}
