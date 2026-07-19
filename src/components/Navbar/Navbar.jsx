import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import { WishlistContext } from "../../contexts/WishlistContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const { wishlist } = useContext(WishlistContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#E8DDD2] shadow-sm">
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide text-[#8B5E3C] hover:text-[#6E462A] transition"
        >
          ShopSphere
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium text-[#3F3A36]">
          <Link to="/" className="hover:text-[#8B5E3C] transition-colors">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-[#8B5E3C] transition-colors"
          >
            Products
          </Link>
          <Link to="/orders" className="hover:text-[#8B5E3C] transition-colors">
            My Orders
          </Link>
          <a href="/#about" className="hover:text-[#8B5E3C] transition-colors">About</a>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative text-2xl text-[#3F3A36] hover:text-[#8B5E3C] transition"
          >
            <FaHeart />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-2xl text-[#3F3A36] hover:text-[#8B5E3C] transition"
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C97C5D] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </Link>

          {/* User Menu */}
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-[#8B5E3C] font-semibold">{user.name}</span>
              <button
                onClick={logout}
                className="bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:block">
              <button className="bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-4 py-2 rounded-lg font-semibold transition">
                Login
              </button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-[#3F3A36]"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8DDD2] shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#3F3A36] hover:text-[#8B5E3C] font-semibold py-2"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#3F3A36] hover:text-[#8B5E3C] font-semibold py-2"
            >
              Products
            </Link>
            <Link
              to="/orders"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#3F3A36] hover:text-[#8B5E3C] font-semibold py-2"
            >
              My Orders
            </Link>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-[#3F3A36] hover:text-[#8B5E3C] font-semibold py-2">About</a>

            <hr className="my-4 border-[#E8DDD2]" />

            {user ? (
              <>
                <div className="text-[#8B5E3C] font-semibold py-2">
                  👤 {user.name}
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block"
              >
                <button className="w-full bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-4 py-2 rounded-lg font-semibold transition">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
