import { X, Plus, Minus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

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
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
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
                  {cart.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="flex gap-4 mb-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-base pr-2">{item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.cartItemId)}
                              className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                          {item.size && (
                            <p className="text-sm text-gray-500 mb-2">
                              Size: {item.size}
                            </p>
                          )}
                          <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                        </div>
                      </div>

                      {/* Quantity Controls - Full Width Bottom */}
                      <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
                        <span className="text-sm font-medium text-gray-700">Quantity</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity - 1)
                            }
                            className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors font-bold"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="w-12 text-center font-bold text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity + 1)
                            }
                            className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors font-bold"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                        <span className="text-sm text-gray-600">Item Total</span>
                        <span className="text-lg font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="w-full block text-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </Link>
                <button
                  onClick={onClose}
                  className="w-full mt-2 px-6 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors"
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