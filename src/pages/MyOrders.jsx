import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

function MyOrders() {
  const [orders, setOrders] = useState(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    // Older versions saved an order on every component render. Keep one copy
    // of each identical legacy order so the history is clean for the customer.
    const seen = new Set();
    const uniqueOrders = savedOrders.filter((order) => {
      // An order is identified by its complete cart and amount, not its generated
      // order id. The previous bug generated a new id on every render.
      const fingerprint = [
        order.total,
        order.items
          ?.map((item) => `${item.id}:${item.quantity}`)
          .sort()
          .join(","),
      ].join("|");
      if (seen.has(fingerprint)) return false;
      seen.add(fingerprint);
      return true;
    });
    if (uniqueOrders.length !== savedOrders.length) {
      localStorage.setItem("orders", JSON.stringify(uniqueOrders));
    }
    return uniqueOrders;
  });

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#F8F5F2] via-[#FFFDFB] to-[#F3E6DA] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10"><p className="text-sm font-bold tracking-[0.18em] text-[#C97C5D] uppercase">Order history</p><h1 className="text-4xl font-bold text-[#3F3A36] mt-2">My Orders</h1></div>

          {orders.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-[#8B5E3C]">
                No Orders Yet
              </h2>

              <p className="text-gray-500 mt-4">
                Start shopping to see your orders here.
              </p>

              <Link to="/">
                <button className="mt-8 bg-[#8B5E3C] text-white px-8 py-3 rounded-full hover:bg-[#6E462A]">
                  Shop Now
                </button>
              </Link>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-3xl shadow-xl shadow-[#8B5E3C]/10 border border-white p-6 sm:p-8 mb-8"
              >
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#3F3A36]">
                      {order.id}
                    </h2>

                    <p className="text-gray-500">{order.date}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">
                      {order.status}
                    </span>
                    <button onClick={() => deleteOrder(order.id)} aria-label={`Delete ${order.id}`} title="Delete order" className="rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-500 transition hover:bg-red-500 hover:text-white">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 sm:gap-6 border-b border-[#F0E8E1] pb-5"
                    >
                      <img
                        src={item.thumbnail || item.image || item.images?.[0]}
                        alt={item.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain bg-[#FAF6F2] rounded-xl p-2"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>

                        <p className="text-gray-500">Qty : {item.quantity}</p>
                      </div>

                      <h3 className="text-xl font-bold text-[#8B5E3C]">
                        ₹
                        {Math.round(
                          item.price * item.quantity * 86,
                        ).toLocaleString("en-IN")}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <h2 className="text-2xl font-bold">Total</h2>

                  <h2 className="text-3xl font-bold text-[#8B5E3C]">
                    ₹{Math.round(order.total * 86).toLocaleString("en-IN")}
                  </h2>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MyOrders;
