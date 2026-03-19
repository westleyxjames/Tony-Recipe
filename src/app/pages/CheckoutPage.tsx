import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ShoppingCart, CreditCard, Truck, Lock } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock order placement
    toast.success("Order placed successfully!");
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const shippingCost = 10;
  const tax = getCartTotal() * 0.08;
  const total = getCartTotal() + shippingCost + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some items to checkout</p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Checkout</span>
        </div>

        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Truck size={24} />
                  Shipping Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard size={24} />
                  Payment Method
                </h2>
                
                {/* Payment Method Selection */}
                <div className="space-y-4">
                  <div 
                    onClick={() => setPaymentMethod("card")}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === "card" 
                        ? "border-black bg-gray-50" 
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="w-5 h-5"
                      />
                      <div className="flex-1">
                        <label className="font-semibold cursor-pointer">
                          Credit / Debit Card
                        </label>
                        <p className="text-sm text-gray-600">
                          Pay securely with your card
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VISA
                        </div>
                        <div className="w-10 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          MC
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    onClick={() => setPaymentMethod("cod")}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === "cod" 
                        ? "border-black bg-gray-50" 
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="w-5 h-5"
                      />
                      <div className="flex-1">
                        <label className="font-semibold cursor-pointer">
                          Cash on Delivery
                        </label>
                        <p className="text-sm text-gray-600">
                          Pay when you receive your order
                        </p>
                      </div>
                      <div className="text-2xl">💵</div>
                    </div>
                  </div>

                  {/* Card Details Form */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="123"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* COD Information */}
                  {paymentMethod === "cod" && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> Please keep exact change ready. Our delivery partner will collect ${total.toFixed(2)} in cash when your order arrives.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <Lock size={16} />
                  <span>Your information is secure and encrypted</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-semibold text-lg"
              >
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                      {item.size && (
                        <p className="text-xs text-gray-500">Size: {item.size}</p>
                      )}
                      <p className="text-sm">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Lock className="mx-auto mb-2 text-green-600" size={24} />
                <p className="text-sm font-semibold">Secure Checkout</p>
                <p className="text-xs text-gray-600 mt-1">
                  SSL encrypted payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}