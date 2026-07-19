import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import toast from "react-hot-toast";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) {
      toast.error("Please register first!");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      login(savedUser.name);
      navigate(location.state?.from || "/", { replace: true });
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[85vh] flex items-center justify-center bg-[#F8F5F2] px-4">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-[#8B5E3C]">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Login to continue shopping
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="email"
              autoComplete="off"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />

            <button className="w-full bg-[#8B5E3C] hover:bg-[#6E462A] text-white py-4 rounded-xl font-semibold transition">
              Login
            </button>
          </form>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#8B5E3C] font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
