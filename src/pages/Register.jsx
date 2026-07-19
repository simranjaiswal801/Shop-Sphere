import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(form));

    toast.success("Registration Successful!");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[90vh] flex items-center justify-center bg-[#F8F5F2] px-4">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-[#8B5E3C]">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Join ShopSphere today
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <button className="w-full bg-[#8B5E3C] hover:bg-[#6E462A] text-white py-4 rounded-xl font-semibold transition">
              Register
            </button>
          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-[#8B5E3C] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
