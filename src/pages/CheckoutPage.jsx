import { useContext, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaLock, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FiCreditCard, FiDollarSign, FiSmartphone } from "react-icons/fi";

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const orderSubmitting = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "COD",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (orderSubmitting.current) return;

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    orderSubmitting.current = true;
    setIsSubmitting(true);

    const newOrder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Processing",
      payment: form.payment,
      customer: form,
      userName: user?.name,
      items: cart.map((item) => ({ ...item })),
      total,
    };

    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([newOrder, ...oldOrders]));
    sessionStorage.setItem("latestOrder", JSON.stringify(newOrder));
    clearCart();

    toast.success("🎉 Order Placed Successfully!");

    setTimeout(() => {
      navigate("/success");
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#F8F5F2] via-[#FFFDFB] to-[#F3E6DA] py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Checkout Form */}

          <div className="bg-white/95 border border-white rounded-3xl shadow-xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-7">
              <div><p className="text-sm font-bold tracking-[0.18em] text-[#C97C5D] uppercase">Secure checkout</p><h2 className="text-3xl font-bold text-[#3F3A36] mt-1">Delivery details</h2></div>
              <span className="bg-[#F5E7DA] text-[#8B5E3C] p-3 rounded-2xl"><FaLock /></span>
            </div>

            <form onSubmit={placeOrder} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-[#E8DDD2] rounded-xl p-4 outline-none transition focus:ring-2 focus:ring-[#C97C5D]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-[#E8DDD2] rounded-xl p-4 outline-none transition focus:ring-2 focus:ring-[#C97C5D]"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-[#E8DDD2] rounded-xl p-4 outline-none transition focus:ring-2 focus:ring-[#C97C5D]"
              />

              <textarea
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-[#E8DDD2] rounded-xl p-4 outline-none transition focus:ring-2 focus:ring-[#C97C5D]"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                className="border border-[#E8DDD2] rounded-xl p-4 outline-none transition focus:ring-2 focus:ring-[#C97C5D]"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={handleChange}
                className="border border-[#E8DDD2] rounded-xl p-4 outline-none transition focus:ring-2 focus:ring-[#C97C5D]"
                />
              </div>

              <div className="pt-3">
                <div className="flex items-center justify-between mb-3">
                  <div><p className="font-bold text-[#3F3A36]">Choose payment method</p><p className="text-sm text-gray-500 mt-0.5">Select how you would like to pay</p></div>
                  <FaLock className="text-[#B9694B]" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["UPI", FiSmartphone, "Pay with any UPI app"],
                    ["Credit Card", FiCreditCard, "Visa, Mastercard & more"],
                    ["Debit Card", FiCreditCard, "Safe and secure checkout"],
                    ["COD", FiDollarSign, "Pay when your order arrives"],
                  ].map(([method, Icon, description]) => {
                    const selected = form.payment === method;
                    return (
                      <button key={method} type="button" onClick={() => setForm({ ...form, payment: method })} className={`group rounded-2xl border p-4 text-left transition duration-200 ${selected ? "border-[#B9694B] bg-[#FCF0E8] shadow-md shadow-[#B9694B]/10" : "border-[#E8DDD2] bg-white hover:-translate-y-0.5 hover:border-[#D6A084] hover:shadow-md"}`}>
                        <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg transition ${selected ? "bg-[#B9694B] text-white" : "bg-[#F8E7DA] text-[#A85B3D] group-hover:bg-[#F0C4A8]"}`}><Icon /></span>
                        <p className="mt-3 text-sm font-bold text-[#3F3A36]">{method}</p>
                        <p className="mt-1 text-xs leading-4 text-gray-500">{description}</p>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#F5F8F5] px-4 py-3 text-sm text-[#4D6A4D]"><FaShieldAlt /> Payments are encrypted and protected</div>
              </div>

              <button disabled={isSubmitting} className="w-full bg-[#8B5E3C] hover:bg-[#6E462A] disabled:cursor-not-allowed disabled:opacity-70 text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-[#8B5E3C]/25 transition hover:-translate-y-0.5">
                {isSubmitting ? "Placing your order..." : "Pay securely & place order"}
              </button>
            </form>
            <p className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-5"><FaShieldAlt className="text-green-600" /> Your information is securely protected</p>
          </div>

          {/* Order Summary */}

          <div className="bg-[#3F3A36] text-white rounded-3xl shadow-xl p-6 sm:p-8 lg:sticky lg:top-28 lg:h-fit">
            <div className="flex items-center justify-between mb-7"><div><p className="text-[#E8C6AE] text-sm font-semibold">YOUR BAG</p><h2 className="text-3xl font-bold mt-1">Order summary</h2></div><span className="bg-white/10 p-3 rounded-2xl"><FaTruck /></span></div>

            {cart.length === 0 ? (
              <p className="text-white/70">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 border-b border-white/10 py-4"
                >
                  <div>
                    <h3 className="font-semibold leading-snug">{item.title}</h3>

                    <p className="text-white/60 text-sm mt-1">Qty: {item.quantity}</p>
                  </div>

                  <p className="font-bold text-[#F3C9A9] whitespace-nowrap">
                    ₹
                    {Math.round(item.price * item.quantity * 86).toLocaleString(
                      "en-IN",
                    )}
                  </p>
                </div>
              ))
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-white/20 text-2xl font-bold">
              <span>Total</span>

              <span className="text-[#F3C9A9]">
                ₹{Math.round(total * 86).toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
