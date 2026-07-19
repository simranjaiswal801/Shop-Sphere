import { Link } from "react-router-dom";
import { FaCheckCircle, FaBoxOpen } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function OrderSuccess() {
  const latestOrder = JSON.parse(sessionStorage.getItem("latestOrder") || "null");

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#F8F5F2] via-[#FFFDFB] to-[#F3E6DA] px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-lg w-full">
          <FaCheckCircle className="text-green-500 text-7xl mx-auto" />

          <h1 className="text-4xl font-bold mt-6 text-[#3F3A36]">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mt-4">
            Thank you for shopping with ShopSphere.
          </p>

          <div className="bg-[#F8F5F2] rounded-2xl mt-8 p-5">
            <p className="text-gray-500">Order ID</p>

            <h2 className="text-2xl font-bold text-[#8B5E3C]">{latestOrder?.id || "Order confirmed"}</h2>
          </div>

          <Link to="/orders" className="inline-flex items-center gap-2 mt-6 text-[#8B5E3C] font-bold hover:text-[#6E462A]"><FaBoxOpen /> View my orders</Link>

          <Link to="/">
            <button className="mt-6 bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-10 py-4 rounded-full">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OrderSuccess;
