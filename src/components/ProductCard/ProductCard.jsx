import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "../../contexts/WishlistContext";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const finalPrice = Math.round(product.price * 86);
  const { isInWishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success("Removed from wishlist!");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist!");
    }
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="group bg-white rounded-3xl overflow-hidden shadow-md
        hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        {/* Discount Badge & Wishlist Button */}
        <div className="relative">
          <span
            className="absolute top-4 left-4 bg-red-500 text-white
            text-xs font-semibold px-3 py-1 rounded-full z-10"
          >
            {Math.round(product.discountPercentage)}% OFF
          </span>

          {/* Wishlist Heart */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-4 right-4 z-20 text-2xl transition-all transform hover:scale-110"
          >
            {inWishlist ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-600 hover:text-red-500" />
            )}
          </button>

          {/* Image */}
          <div className="h-64 bg-[#F7F5F2] flex items-center justify-center p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 object-contain group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Brand */}
          <p className="text-sm uppercase text-[#B07A56] font-semibold">
            {product.brand}
          </p>

          {/* Title */}
          <h2 className="font-semibold text-lg mt-2 text-[#3F3A36] line-clamp-2">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center mt-3">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="ml-2 text-gray-700 font-medium">
              {product.rating}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-5">
            <div>
              <p className="text-2xl font-bold text-[#8B5E3C]">
                ₹{finalPrice.toLocaleString("en-IN")}
              </p>

              <p className="text-gray-400 line-through text-sm">
                ₹
                {Math.round(
                  (product.price * 86 * 100) /
                    (100 - product.discountPercentage),
                ).toLocaleString("en-IN")}
              </p>
            </div>

            <button
              className="bg-[#8B5E3C] hover:bg-[#6E462A]
              text-white px-5 py-2 rounded-full transition"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
