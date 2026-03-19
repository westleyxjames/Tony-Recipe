import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { products } from "../data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(products);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  // Clear search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-50 max-w-4xl mx-auto mt-20 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-6 border-b flex items-center gap-4">
              <Search size={24} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-lg outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-[60vh] overflow-y-auto p-6">
              {searchQuery.trim() !== "" && searchResults.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found for "{searchQuery}"</p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    {searchQuery.trim() === "" 
                      ? `Showing all ${searchResults.length} products` 
                      : `${searchResults.length} ${searchResults.length === 1 ? "result" : "results"} found`}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={onClose}
                        className="group"
                      >
                        <div className="aspect-square overflow-hidden rounded-lg mb-2 bg-gray-100">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-semibold text-sm mb-1 group-hover:text-gray-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                        <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}