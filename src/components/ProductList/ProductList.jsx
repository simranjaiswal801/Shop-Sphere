//
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import ProductFilters from "../ProductFilters/ProductFilters";
import { SkeletonGrid } from "../SkeletonLoader/SkeletonLoader";

function ProductList({ limit }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 100000],
    minRating: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  // Filter Products
  let filteredProducts = [...products];

  // Search
  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Category Filter
  if (filters.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filters.category,
    );
  }

  // Price Filter
  filteredProducts = filteredProducts.filter((product) => {
    const finalPrice = Math.round(product.price * 86);
    return (
      finalPrice >= filters.priceRange[0] && finalPrice <= filters.priceRange[1]
    );
  });

  // Rating Filter
  filteredProducts = filteredProducts.filter(
    (product) => product.rating >= filters.minRating,
  );

  // Sort
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Home = 8 products | Products Page = All
  const displayProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-8">
      {/* Heading */}
      {/* Filters and Search */}
      <div className={`mb-8 space-y-4 ${limit ? "hidden" : ""}`}>
        <SearchBar search={search} setSearch={setSearch} />

        {!limit && (
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <ProductFilters onFilterChange={setFilters} products={products} />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#8B5E3C] outline-none"
            >
              <option value="">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && <SkeletonGrid count={limit ? 4 : 12} />}

      {!loading && (
        <>
          <p className="text-center text-gray-500 mb-8">
            Showing {displayProducts.length} Products
          </p>

          {displayProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No products found!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default ProductList;
