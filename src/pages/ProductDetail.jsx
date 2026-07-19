import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { getSingleProduct } from "../services/api";
import { CartContext } from "../contexts/CartContext";
import Loading from "../components/Loading/Loading";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

 const loadProduct = async () => {
   try {
     setLoading(true);
     const data = await getSingleProduct(id);
     setProduct(data);
   } catch (err) {
     setError("Unable to load product.");
   } finally {
     setLoading(false);
   }
 };
if (loading) return <Loading />;

if (error) {
  return (
    <>
      <Navbar />
      <div className="text-center py-20 text-red-500 text-3xl">{error}</div>
    </>
  );
}

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        <div className="bg-white rounded-3xl shadow-lg p-10 flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className=".h-[450px] object-contain"
          />
        </div>

        <div>
          <p className="uppercase text-[#C97C5D] font-semibold">
            {product.brand}
          </p>

          <h1 className="text-5xl font-bold mt-4 text-[#3F3A36]">
            {product.title}
          </h1>

          <p className="mt-6 text-gray-600 leading-8">{product.description}</p>

          <h2 className="text-4xl text-[#8B5E3C] font-bold mt-8">
            ₹{Math.round(product.price * 86).toLocaleString("en-IN")}
          </h2>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-[#8B5E3C] text-white px-10 py-4 rounded-full hover:bg-[#403c39]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
