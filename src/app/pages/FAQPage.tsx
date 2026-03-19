import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available at checkout for an additional fee. All orders are processed within 24 hours."
  },
  {
    question: "Do you ship across the USA?",
    answer: "Yes! We ship to all 50 states in the United States. Free shipping is available on orders over $75."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption."
  },
  {
    question: "How can I return an item?",
    answer: "We offer a 30-day return policy. Items must be unused with tags attached. Simply initiate a return through your account or contact our customer service team."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
  },
  {
    question: "What is your size guide?",
    answer: "Each product page includes a detailed size guide. We recommend measuring yourself and comparing to our size chart for the best fit. If you're between sizes, we suggest sizing up."
  },
  {
    question: "Can I exchange an item?",
    answer: "Yes! If you need a different size or color, you can exchange items within 30 days. Contact our customer service team to arrange an exchange."
  },
  {
    question: "How do I contact customer service?",
    answer: "You can reach us at support@nexterafashion.com or call (800) 421-8845 Monday-Friday, 9AM-6PM EST. We typically respond to emails within 24 hours."
  }
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
