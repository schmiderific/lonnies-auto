// components/Header.tsx

import ShopInfo from "../components/ShopInfo";

export default function Header() {
  return (
    <>
      <header className="flex flex-col sm:flex-row py-6 px-8 justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">
          <a href="/" className="hover:text-blue-800 transition">
            Lonnie's University Auto
          </a>
        </div>
        <div className="mt-4 sm:mt-0 text-sm text-gray-600 text-center sm:text-right">
          <ShopInfo/>
        </div>
      </header>
    </>
  );
}
