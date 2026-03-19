import { Mail, Phone, Clock } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            We're here to help! Reach out to our customer service team
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Tell us more..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our customer service team is available to assist you with any questions, 
                concerns, or feedback you may have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-700">support@nexterafashion.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-700">(800) 421-8845</p>
                  <p className="text-sm text-gray-500">Toll-free customer support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday</p>
                  <p className="text-gray-700">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="/faq" className="hover:text-black transition-colors">
                    → Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="/return-policy" className="hover:text-black transition-colors">
                    → Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    → Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    → Shipping Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
