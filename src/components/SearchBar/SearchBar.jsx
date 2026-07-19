import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full">
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition"
        />
      </div>
    </div>
  );
}

export default SearchBar;
