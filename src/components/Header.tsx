// components/Header.tsx
export default function Header() {
  return (
    <>
      <header className="flex flex-col sm:flex-row py-6 justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">
          <a href="/" className="hover:text-blue-800 transition">
            Lonnie's University Auto
          </a>
        </div>
        <div className="mt-4 sm:mt-0 text-sm text-gray-600 text-center sm:text-right">
          <p>
            Call Us:{" "}
            <a href="tel:1234567890" className="text-blue-600 hover:underline">
              123-456-7890
            </a>
          </p>
          <p>123 Main St, Anytown USA</p>
        </div>
      </header>
    </>
  );
}
