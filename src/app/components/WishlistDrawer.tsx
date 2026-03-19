import { X, ShoppingCart, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { toast } from "sonner";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

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
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-2xl font-bold">Wishlist</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Wishlist Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {wishlist.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                  <Link
                    to="/shop"
                    onClick={onClose}
                    className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlist.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b last:border-b-0"
                    >
                      <Link
                        to={`/product/${item.id}`}
                        onClick={onClose}
                        className="shrink-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={onClose}
                          className="hover:underline"
                        >
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                        </Link>
                        <p className="font-bold mb-3">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="flex-1 px-3 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                          >
                            <ShoppingCart size={16} />
                            Add to Cart
                          </button>
                          <button
                            onClick={() => {
                              removeFromWishlist(item.id);
                              toast.success("Removed from wishlist");
                            }}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-50 hover:border-red-500 text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {wishlist.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <p className="text-center text-sm text-gray-600 mb-3">
                  {wishlist.length} {wishlist.length === 1 ? "item" : "items"}{" "}
                  in your wishlist
                </p>
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
