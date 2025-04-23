// components/Nav.tsx
export default function Nav() {
  return (
    <>
      <nav className="mb-6 text-white bg-blue-700 rounded-lg shadow">
        <ul className="flex flex-wrap px-4 py-3 justify-center gap-4 sm:justify-start">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:underline">
              Reviews
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
