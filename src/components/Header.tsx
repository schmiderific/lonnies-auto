// components/Header.tsx
export default function Header() {
    return (
    <>
      <header class="flex flex-col sm:flex-row justify-between items-center py-6">
        <div class="text-2xl font-bold text-blue-700">
          <a href="/" class="hover:text-blue-800 transition">Lonnie's University Auto</a>
        </div>
        <div class="mt-4 sm:mt-0 text-sm text-gray-600 text-center sm:text-right">
          <p>Call Us: <a href="tel:1234567890" class="text-blue-600 hover:underline">123-456-7890</a></p>
          <p>123 Main St, Anytown USA</p>
        </div>
      </header>
    </>
    );
  }
  