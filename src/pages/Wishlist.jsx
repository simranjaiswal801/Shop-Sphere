import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { WishlistContext } from "../contexts/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen `bg-gradient-to-b from-[#F8F5F2] to-white pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="py-20">
              <div className="text-6xl mb-4">💝</div>
              <h1 className="text-4xl font-bold text-[#3F3A36] mb-4">
                Your Wishlist is Empty
              </h1>
              <p className="text-gray-600 mb-8">
                Start adding your favorite products!
              </p>
              <Link to="/products">
                <button className="bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen `bg-gradient-to-b from-[#F8F5F2] to-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#6E462A] font-semibold mb-8"
          >
            <FiArrowLeft size={20} /> Back to Shopping
          </Link>

          <h1 className="text-4xl font-bold text-[#3F3A36] mb-2">
            My Wishlist ❤️
          </h1>
          <p className="text-gray-600 mb-8">
            {wishlist.length} item{wishlist.length > 1 ? "s" : ""} saved
          </p>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-64 bg-[#F7F5F2] flex items-center justify-center p-6 relative">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-48 object-contain group-hover:scale-110 transition duration-300"
                  />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm uppercase text-[#B07A56] font-semibold">
                    {product.brand}
                  </p>

                  <h3 className="font-semibold text-lg mt-2 text-[#3F3A36] line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center mt-3 mb-4">
                    <span className="text-yellow-500">⭐</span>
                    <span className="ml-2 text-gray-700 font-medium">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#8B5E3C] font-bold text-lg">
                      ₹{Math.round(product.price * 86)}
                    </span>
                  </div>

                  <Link to={`/product/${product.id}`} className="block mt-4">
                    <button className="w-full bg-[#8B5E3C] hover:bg-[#6E462A] text-white py-2 rounded-lg font-semibold transition-all">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
