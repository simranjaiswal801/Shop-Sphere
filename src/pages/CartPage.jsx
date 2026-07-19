import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#F8F5F2] via-[#FFFDFB] to-[#F3E6DA] py-12 px-6">
        <div className="max-w-6xl mx-auto">
        <div className="mb-8"><p className="text-sm font-bold tracking-[0.18em] text-[#C97C5D] uppercase">Your selections</p><h1 className="text-4xl font-bold text-[#3F3A36] mt-2">Shopping Cart</h1></div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FaShoppingCart className="text-7xl text-[#C97C5D]" />

            <h2 className="text-4xl font-bold mt-6 text-[#3F3A36]">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3 text-center">
              Looks like you haven't added anything yet.
            </p>

            <Link to="/">
              <button className="mt-8 bg-[#8B5E3C] hover:bg-[#6E462A] text-white px-8 py-3 rounded-full transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-4 bg-white rounded-2xl shadow-lg shadow-[#8B5E3C]/10 border border-white p-4 sm:p-5 mb-4"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.thumbnail || item.image || item.images?.[0]}
                  className="w-20 h-20 object-contain"
                  alt={item.title}
                />

                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="font-semibold text-[#8B5E3C]">
                    ₹{Math.round(item.price * 86).toLocaleString("en-IN")}
                  </p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-semibold transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-2xl bg-[#3F3A36] text-white p-5 sm:p-6 shadow-xl">
            <p className="text-white/75">Ready to finish your order?</p>
            <Link to="/checkout">
              <button className="bg-[#C97C5D] hover:bg-[#B9694B] text-white px-8 py-3 rounded-xl font-bold transition hover:-translate-y-0.5">
                Proceed to Payment
              </button>
            </Link>
          </div>
        )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
