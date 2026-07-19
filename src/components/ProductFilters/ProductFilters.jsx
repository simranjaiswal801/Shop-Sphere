import { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";

function ProductFilters({ onFilterChange, products }) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [minRating, setMinRating] = useState(0);

  // Get unique categories
  const categories = [...new Set(products?.map((p) => p.category))].filter(
    Boolean,
  );

  const handleApplyFilters = () => {
    onFilterChange({
      category: selectedCategory,
      priceRange,
      minRating,
    });
    setShowFilters(false);
  };

  const handleReset = () => {
    setSelectedCategory("");
    setPriceRange([0, 100000]);
    setMinRating(0);
    onFilterChange({
      category: "",
      priceRange: [0, 100000],
      minRating: 0,
    });
  };

  return (
    <>
      {/* Filter Toggle Button */}
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-4 py-2 rounded-lg font-semibold transition-all md:hidden"
        >
          <FiFilter size={20} />
          Filters
        </button>
      </div>

      {/* Filter Panel */}
      <div
        className={`fixed md:relative top-0 left-0 h-screen md:h-auto w-80 md:w-full bg-white md:bg-transparent z-40 transform transition-transform duration-300 ${
          showFilters ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowFilters(false)}
          className="md:hidden absolute top-4 right-4 text-2xl text-gray-600"
        >
          <FiX />
        </button>

        <div className="p-6 md:p-0">
          <h3 className="text-xl font-bold text-[#3F3A36] mb-6">Filters</h3>

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="mb-8">
              <h4 className="font-semibold text-[#3F3A36] mb-4">Category</h4>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#8B5E3C] outline-none transition-colors"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Price Range Filter */}
          <div className="mb-8">
            <h4 className="font-semibold text-[#3F3A36] mb-4">Price Range</h4>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="w-full cursor-pointer"
              />
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-2">
                ₹{priceRange[0]} - ₹{priceRange[1]}
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-8">
            <h4 className="font-semibold text-[#3F3A36] mb-4">
              Minimum Rating
            </h4>
            <div className="flex gap-2">
              {[0, 3, 4, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setMinRating(rating)}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                    minRating === rating
                      ? "bg-[#8B5E3C] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {rating === 0 ? "All" : `${rating}⭐`}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleApplyFilters}
              className="flex-1 bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-4 py-3 rounded-lg font-semibold transition-all"
            >
              Apply
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#3F3A36] px-4 py-3 rounded-lg font-semibold transition-all"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}
    </>
  );
}

export default ProductFilters;
