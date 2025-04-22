// components/Nav.tsx
export default function Nav() {
    return (
      <>
        <nav class="bg-blue-700 text-white rounded-lg shadow mb-6">
          <ul class="flex flex-wrap justify-center sm:justify-start gap-4 px-4 py-3">
            <li><a href="/" class="hover:underline">Home</a></li>
            <li><a href="#services" class="hover:underline">Services</a></li>
            <li><a href="#about" class="hover:underline">About Us</a></li>
            <li><a href="#contact" class="hover:underline">Contact</a></li>
            <li><a href="#reviews" class="hover:underline">Reviews</a></li>
          </ul>
        </nav>
        </>
    );
  }
  