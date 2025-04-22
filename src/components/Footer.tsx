// components/Footer.tsx
export default function Footer() {
    return (
      <>
        <footer id="contact" class="bg-blue-900 text-white py-12">
        <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
          
          <div>
            <h3 class="text-2xl font-semibold mb-4">Contact Us</h3>
            <p class="mb-2">📍 123 Main St, Anytown, USA</p>
            <p class="mb-2">📞 <a href="tel:1234567890" class="underline">123-456-7890</a></p>
            <p class="mb-4">✉️ <a href="mailto:info@lonnieauto.com" class="underline">info@lonnieauto.com</a></p>
            <p class="text-sm text-gray-300 mt-6">© 2025 Lonnie's University Auto. All rights reserved.</p>
          </div>

          <form class="bg-white rounded-lg p-6 text-gray-800 shadow" method="POST" action="/contact">
            <h3 class="text-xl font-semibold mb-4">Send a Message</h3>
            <div class="mb-4">
              <label class="block mb-1 font-medium" for="name">Name</label>
              <input type="text" id="name" name="name" required class="w-full border-gray-300 rounded p-2" />
            </div>
            <div class="mb-4">
              <label class="block mb-1 font-medium" for="email">Email</label>
              <input type="email" id="email" name="email" required class="w-full border-gray-300 rounded p-2" />
            </div>
            <div class="mb-4">
              <label class="block mb-1 font-medium" for="message">Message</label>
              <textarea id="message" name="message" rows="4" required class="w-full border-gray-300 rounded p-2"></textarea>
            </div>
            <button type="submit" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              Send
            </button>
          </form>

        </div>
      </footer>
      </>
    );
  }
  