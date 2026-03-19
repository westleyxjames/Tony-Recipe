export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About NextEra Fashion</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Redefining modern fashion for the next generation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              NextEra Fashion was created to bring modern, stylish, and comfortable clothing to people who value 
              quality and individuality. Our mission is to design fashion that fits the fast-paced lifestyle of 
              today's generation while maintaining premium quality and affordability.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We proudly serve customers across the United States with carefully curated fashion collections 
              for both men and women. Each piece is thoughtfully designed to blend contemporary aesthetics 
              with timeless appeal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 py-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-600">States Served</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-700 leading-relaxed">
                  We source only the finest materials and work with skilled artisans to ensure every piece 
                  meets our high standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Fashion</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're committed to reducing our environmental impact through responsible sourcing and 
                  ethical manufacturing practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your happiness is our priority. We offer easy returns, responsive customer service, 
                  and a seamless shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
