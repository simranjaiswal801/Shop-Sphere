import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";

function Products() {
  return (
    <>
      <Navbar />

<div className="bg-[#F8F5F2] min-h-screen">

  <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">

    <h1 className="text-5xl font-bold text-center text-[#3F3A36]">
      All Products
    </h1>

    <p className="text-center text-gray-500 mt-2">
      Explore our complete collection
    </p>


          <ProductList limit={180} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
