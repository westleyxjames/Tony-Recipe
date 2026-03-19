import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { products } from "../data/products";

export function ShopPage() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const { addToCart, addToWishlist, isInWishlist, openCart } = useCart();

  // Get category from URL
  const urlCategory = location.pathname.includes("/men") ? "men" : 
                      location.pathname.includes("/women") ? "women" : "all";

  const filteredProducts = products.filter((product) => {
    if (urlCategory !== "all" && product.category !== urlCategory) return false;
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    if (priceRange === "under50" && product.price >= 50) return false;
    if (priceRange === "50to100" && (product.price < 50 || product.price > 100)) return false;
    if (priceRange === "over100" && product.price <= 100) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // featured - keep original order
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">
            {urlCategory === "men" ? "Men's Collection" : 
             urlCategory === "women" ? "Women's Collection" : "Shop All"}
          </h1>
          <p className="text-gray-600">Discover our latest styles and trends</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              {/* Category Filter */}
              {urlCategory === "all" && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Category</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "all"}
                        onChange={() => setSelectedCategory("all")}
                        className="w-4 h-4"
                      />
                      <span>All</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "men"}
                        onChange={() => setSelectedCategory("men")}
                        className="w-4 h-4"
                      />
                      <span>Men</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "women"}
                        onChange={() => setSelectedCategory("women")}
                        className="w-4 h-4"
                      />
                      <span>Women</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === "all"}
                      onChange={() => setPriceRange("all")}
                      className="w-4 h-4"
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === "under50"}
                      onChange={() => setPriceRange("under50")}
                      className="w-4 h-4"
                    />
                    <span>Under $50</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === "50to100"}
                      onChange={() => setPriceRange("50to100")}
                      className="w-4 h-4"
                    />
                    <span>$50 - $100</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === "over100"}
                      onChange={() => setPriceRange("over100")}
                      className="w-4 h-4"
                    />
                    <span>Over $100</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-600">{sortedProducts.length} Products</p>
              
              {/* Sort Dropdown */}
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button 
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md" 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToWishlist(product);
                        const message = isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist";
                        toast.success(message);
                      }}
                    >
                      <Heart size={20} className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"} />
                    </button>
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-gray-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">${product.price}</p>
                      <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2" onClick={() => {
                        addToCart(product);
                        toast.success(`${product.name} added to cart!`);
                        openCart();
                      }}>
                        <ShoppingCart size={16} />
                        Add
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}