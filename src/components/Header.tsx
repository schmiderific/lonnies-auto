import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Clock,
  MapPin,
  Facebook,
} from "lucide-react";
import YelpIcon from "./icons/YelpIcon";
import LonniesLogo from "../assets/LonniesLogo.png";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Warranty", href: "/warranty" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-blue-50 text-sm py-4 px-4 font-raleway">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-start text-center sm:text-left">
          {/* Left: Address + Directions */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-amber-400" />
              <span className="font-semibold">123 Main St, Hometown, USA</span>
            </div>
            <a
              href="https://maps.google.com/?q=123+Main+St+Hometown"
              className="flex items-center gap-1 font-semibold text-amber-300 hover:text-white transition"
            >
              Find Us
            </a>
          </div>

          {/* Center: Hours + Phone */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-amber-400" />
              <span className="font-semibold">Mon–Fri: 8am–6pm</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-amber-400" />
              <a
                href="tel:+1234567890"
                className="underline hover:text-amber-300 font-semibold"
              >
                (123) 456-7890
              </a>
            </div>
          </div>

          {/* Right: Social Icons - centered above button */}
          <div className="flex flex-col items-end justify-start">
            <div className="flex justify-center gap-4 mb-1 pr-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition"
                aria-label="Yelp"
              >
                <YelpIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-blue-50 shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 grid grid-cols-3 items-center">
          {/* Left: Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src={LonniesLogo}
              alt="Lonnies"
              className="h-16 w-auto"
            />
            <span className="sr-only">Home</span>
          </a>

          {/* Center: Nav */}
          <nav className="hidden md:flex justify-center space-x-6 font-raleway tracking-wide text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-blue-900 font-semibold hover:text-amber-600 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Appointment Button */}
          <div className="hidden md:flex justify-end">
            <a
              href="/appointments"
              className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-amber-600 transition"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden col-span-3 flex justify-end mt-2">
            <button
              className="text-blue-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-blue-50 px-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-blue-900 hover:text-amber-600 transition"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/appointments"
              className="block text-center bg-amber-500 text-white font-semibold py-2 rounded-xl shadow hover:bg-amber-600 transition"
            >
              Book Appointment
            </a>
          </div>
        )}
      </header>
    </>
  );
}