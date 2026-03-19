import { Link } from "react-router";
import { Search, ShoppingCart, Heart, Menu, User } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "./CartDrawer";
import { WishlistDrawer } from "./WishlistDrawer";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, wishlist, isCartOpen, isWishlistOpen, openCart, closeCart, openWishlist, closeWishlist } = useCart();

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-center py-2 text-sm">
        <p>FREE SHIPPING ON ALL ORDERS OVER $75 | USE CODE: FREESHIP</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            NEXTERA FASHION
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-300 transition-colors">
              Shop
            </Link>
            <Link to="/shop/men" className="hover:text-gray-300 transition-colors">
              Men
            </Link>
            <Link to="/shop/women" className="hover:text-gray-300 transition-colors">
              Women
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link to="/faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:text-gray-300 transition-colors" onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
            </button>
            <Link to="/profile" className="hover:text-gray-300 transition-colors">
              <User size={20} />
            </Link>
            <button className="hover:text-gray-300 transition-colors relative" onClick={() => openWishlist()}>
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="hover:text-gray-300 transition-colors relative" onClick={() => openCart()}>
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 border-t border-gray-700">
            <Link to="/" className="block hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="block hover:text-gray-300 transition-colors">
              Shop
            </Link>
            <Link to="/shop/men" className="block hover:text-gray-300 transition-colors">
              Men
            </Link>
            <Link to="/shop/women" className="block hover:text-gray-300 transition-colors">
              Women
            </Link>
            <Link to="/about" className="block hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link to="/faq" className="block hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="block hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link to="/profile" className="block hover:text-gray-300 transition-colors">
              My Profile
            </Link>
          </nav>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => closeCart()} />

      {/* Wishlist Drawer */}
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => closeWishlist()} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}