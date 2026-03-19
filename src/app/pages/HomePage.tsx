import { Link } from "react-router";
import { motion } from "motion/react";
import { Star, Truck, RotateCcw, Shield } from "lucide-react";

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section 1 - Men's Collection */}
      <section className="relative h-[600px] bg-[#c8b8a8] overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 h-full items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm tracking-widest uppercase">MEN'S COLLECTION</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Effortlessly Cool
              </h1>
              <p className="text-lg text-gray-700">
                Minimalist styles that make a statement
              </p>
              <div className="flex gap-4">
                <Link
                  to="/shop/men"
                  className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  SHOP MEN
                </Link>
                <Link
                  to="/shop"
                  className="px-8 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full flex items-center justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1517336985-b7c900b80702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBzdHJpcGVkJTIwc3dlYXRlciUyMHZpbnRhZ2V8ZW58MXx8fHwxNzcyNzgxNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Men's Fashion"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Women's Collection */}
      <section className="relative h-[600px] bg-[#8b7355] overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 h-full items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full flex items-center justify-center order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1589807436142-6f6115a00e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwY3JvcCUyMHRvcCUyMGJsYWNrJTIwcGFudHN8ZW58MXx8fHwxNzcyNzgxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Women's Fashion"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2 text-white"
            >
              <p className="text-sm tracking-widest uppercase">WOMEN'S COLLECTION</p>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                It's All About
                <br />
                The Vibe
              </h2>
              <p className="text-lg">
                Discover timeless pieces that define modern masculinity
              </p>
              <div className="flex gap-4">
                <Link
                  to="/shop/women"
                  className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                >
                  EXPLORE
                </Link>
                <Link
                  to="/shop"
                  className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-amber-100 to-amber-50 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold">
            25% OFF All Items | Plus Free 25% OFF on 3 & more
          </p>
        </div>
      </section>

      {/* Hero Section 3 - Choose Loose */}
      <section className="relative h-[600px] bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 h-full items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full flex items-center justify-center order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1764583473832-0a439620990f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uYWJsZSUyMHdvbWFuJTIwZWxlZ2FudCUyMG91dGZpdHxlbnwxfHx8fDE3NzI3ODI0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Choose Loose"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2"
            >
              <p className="text-sm tracking-widest uppercase italic">It's casual</p>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Choose Loose
              </h2>
              <p className="text-lg text-gray-700">
                Comfort meets contemporary style
              </p>
              <div>
                <Link
                  to="/shop"
                  className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section 4 - Ella Langley */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1753874383454-23d1601167b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjB3aGVhdCUyMGZpZWxkJTIwZ29sZGVufGVufDF8fHx8MTc3Mjc4MTQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Ella Langley Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <p className="text-sm tracking-widest uppercase">OUR SIGNATURE</p>
            <h2 className="text-7xl md:text-8xl font-bold leading-tight tracking-wider text-[#f4e4c1]">
              ELLA LANGLEY
            </h2>
            <Link
              to="/shop/women"
              className="inline-block px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
              SHOP THE COLLECTION
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Customer Avatars Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                  <Truck className="text-white" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold">Fast USA Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $75</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                  <RotateCcw className="text-white" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                  <Shield className="text-white" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold">Secure Checkout</h3>
              <p className="text-gray-600">100% secure payment</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                  <Star className="text-white" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold">Quality Materials</h3>
              <p className="text-gray-600">Premium fabrics & craftsmanship</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Stay Ahead of Fashion</h2>
            <p className="text-lg text-gray-400">
              Subscribe to get exclusive offers, style updates, and new arrivals.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white text-black rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}