import { useState } from "react";
import { useParams, Link } from "react-router";
import { Heart, ShoppingCart, Star, Truck, RotateCcw } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export function ProductPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, isInWishlist, openCart } = useCart();

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // Mock product data - in a real app, this would fetch based on id
  const product = {
    id: Number(id),
    name: "Premium Pink Sweatshirt",
    price: 44.99,
    rating: 4.5,
    category: "women",
    image: "https://images.unsplash.com/photo-1736343025447-219e462c0860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwaW5rJTIwc3dlYXRlciUyMGNhc3VhbHxlbnwxfHx8fDE3NzI3ODE0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    toast.success(`${product.name} added to cart!`);
    openCart();
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    const message = isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist";
    toast.success(message);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Product</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1736343025447-219e462c0860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwaW5rJTIwc3dlYXRlciUyMGNhc3VhbHxlbnwxfHx8fDE3NzI3ODE0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <img
                    src="https://images.unsplash.com/photo-1736343025447-219e462c0860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwaW5rJTIwc3dlYXRlciUyMGNhc3VhbHxlbnwxfHx8fDE3NzI3ODE0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Premium Pink Sweatshirt</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-gray-600">(4.5) • 127 Reviews</span>
              </div>
              <p className="text-3xl font-bold mb-4">$44.99</p>
            </div>

            <div className="border-t border-b py-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Crafted from premium cotton blend fabric, this sweatshirt offers unparalleled comfort and style. 
                Perfect for casual outings or lounging at home. Features a relaxed fit and modern design.
              </p>

              {/* Size Selector */}
              <div>
                <p className="font-semibold mb-3">Select Size</p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border-2 rounded-lg font-semibold transition-colors ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="font-semibold mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-bold"
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="w-full py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Heart size={20} />
                Add to Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-3">
                <Truck className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $75</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 80% Cotton, 20% Polyester</li>
                <li>• Machine washable</li>
                <li>• Relaxed fit</li>
                <li>• Ribbed cuffs and hem</li>
                <li>• Made in USA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-semibold mb-1">Amazing quality!</p>
                <p className="text-sm text-gray-600 mb-2">by Customer {i} • March {i}, 2026</p>
                <p className="text-gray-700">
                  Love this sweatshirt! The material is so soft and comfortable. Perfect fit and great quality. 
                  Highly recommend!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}