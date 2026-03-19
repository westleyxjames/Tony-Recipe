import { useState } from "react";
import { User, Mail, Phone, MapPin, Package, Heart, CreditCard, Settings, LogOut, Edit2 } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { products } from "../data/products";

export function ProfilePage() {
  const { cart, wishlist } = useCart();
  const [activeTab, setActiveTab] = useState<"profile" | "orders" | "wishlist">("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data (in a real app, this would come from authentication)
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fashion Avenue, New York, NY 10001"
  });

  // Mock order history
  const mockOrders = [
    {
      id: "ORD-001",
      date: "March 2, 2026",
      status: "Delivered",
      total: 159.97,
      items: 3
    },
    {
      id: "ORD-002",
      date: "February 28, 2026",
      status: "In Transit",
      total: 89.99,
      items: 1
    },
    {
      id: "ORD-003",
      date: "February 15, 2026",
      status: "Delivered",
      total: 234.50,
      items: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={48} className="text-gray-500" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
              <p className="text-gray-600">{userData.email}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <div className="flex gap-8 px-8">
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === "profile"
                    ? "border-black font-semibold"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>Profile</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === "orders"
                    ? "border-black font-semibold"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Package size={18} />
                  <span>Orders</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === "wishlist"
                    ? "border-black font-semibold"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Heart size={18} />
                  <span>Wishlist ({wishlist.length})</span>
                </div>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Personal Information</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Edit2 size={16} />
                      <span>{isEditing ? "Save" : "Edit"}</span>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <User size={16} />
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={userData.name}
                          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      ) : (
                        <p className="text-gray-900 px-4 py-3 bg-gray-50 rounded-lg">{userData.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Mail size={16} />
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={userData.email}
                          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      ) : (
                        <p className="text-gray-900 px-4 py-3 bg-gray-50 rounded-lg">{userData.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Phone size={16} />
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={userData.phone}
                          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      ) : (
                        <p className="text-gray-900 px-4 py-3 bg-gray-50 rounded-lg">{userData.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <MapPin size={16} />
                        Address
                      </label>
                      {isEditing ? (
                        <textarea
                          value={userData.address}
                          onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                          rows={2}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      ) : (
                        <p className="text-gray-900 px-4 py-3 bg-gray-50 rounded-lg">{userData.address}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <CreditCard size={18} />
                          <span>Payment Methods</span>
                        </div>
                        <span className="text-gray-400">→</span>
                      </button>
                      <button className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <Settings size={18} />
                          <span>Preferences</span>
                        </div>
                        <span className="text-gray-400">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Order History</h2>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          order.status === "Delivered" 
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <div className="text-sm text-gray-600">
                          {order.items} {order.items === 1 ? "item" : "items"}
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                          <button className="text-sm text-black hover:underline mt-1">View Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">My Wishlist ({wishlist.length} items)</h2>
                {wishlist.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                    <Link
                      to="/shop"
                      className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((item) => {
                      const product = products.find(p => p.id === item.productId);
                      if (!product) return null;
                      
                      return (
                        <Link
                          key={item.productId}
                          to={`/product/${item.productId}`}
                          className="group"
                        >
                          <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="font-semibold mb-1 group-hover:text-gray-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="font-bold">${product.price.toFixed(2)}</p>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
