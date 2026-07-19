import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FiArrowRight,
  FiArrowUp,
  FiCheck,
  FiClock,
  FiHeart,
  FiLayers,
  FiPackage,
  FiSearch,
  FiShield,
  FiStar,
  FiTruck,
} from "react-icons/fi";

function Home() {
  const [email, setEmail] = useState("");
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const subscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("You're on the list — welcome to ShopSphere!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#fffdfa] text-[#29211d]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#2e231e]">
          <div className="absolute -top-28 -left-24 h-96 w-96 rounded-full bg-[#c97c5d]/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-112 .w-112 rounded-full bg-[#e8c6ae]/15 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-18 lg:py-20">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#f5d7bf]">
                  <span className="h-2 w-2 rounded-full bg-[#f0a57c]" /> Curated finds. Everyday joy.
                </p>
                <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
                  Everything you love, <span className="text-[#efb58d]">all in one place.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#e5d8d0]">
                  Discover handpicked essentials, thoughtful gifts and the latest trends—all in one beautiful place.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <button onClick={scrollToProducts} className="group inline-flex items-center gap-2 rounded-xl bg-[#e89a70] px-6 py-4 font-bold text-[#2e231e] transition hover:-translate-y-1 hover:bg-[#f4b58f] hover:shadow-xl hover:shadow-black/25">
                    Shop bestsellers <FiArrowRight className="transition group-hover:translate-x-1" />
                  </button>
                  <Link to="/products" className="inline-flex items-center rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10">
                    Browse all products
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#eadbd2]">
                  <span className="flex items-center gap-2"><FiCheck className="text-[#efb58d]" /> Secure checkout</span>
                  <span className="flex items-center gap-2"><FiCheck className="text-[#efb58d]" /> Easy returns</span>
                  <span className="flex items-center gap-2"><FiCheck className="text-[#efb58d]" /> Fast delivery</span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="absolute -inset-3 .rounded-[2rem] `bg-gradient-to-br from-[#f4b58f]/50 to-transparent blur-xl" />
                <img src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fashion shopping collection" className="relative .h-[380px] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/40 md:h-117.5" />
                <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl md:-left-8 md:px-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8e7da] text-[#a85b3d]"><FiHeart /></span>
                  <div><p className="text-xs font-semibold text-gray-500">LOVED BY SHOPPERS</p><p className="font-bold text-[#342722]">4.9 / 5 rating</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto mt-8 max-w-7xl px-6 md:mt-10">
          <div className="grid overflow-hidden rounded-b-3xl bg-white shadow-xl shadow-[#6b4635]/10 md:grid-cols-3">
            {[
              [FiTruck, "Quick delivery", "Delivered with care to your doorstep"],
              [FiShield, "Secure payments", "Your payment details stay protected"],
              [FiPackage, "Easy returns", "Simple 30-day return process"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="group flex gap-4 border-b border-[#f1e8e2] p-6 transition duration-300 hover:bg-[#fff9f5] last:border-0 md:border-b-0 md:border-r md:last:border-r-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8e7da] text-xl text-[#a85b3d] transition duration-300 group-hover:scale-110 group-hover:bg-[#efb58d] group-hover:text-[#5e3020]"><Icon /></span>
                <div><h2 className="font-bold text-[#342722]">{title}</h2><p className="mt-1 text-sm leading-6 text-gray-500">{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="text-sm font-bold tracking-[0.2em] text-[#b9694b]">SHOP BY MOOD</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#342722]">Find your everyday essentials.</h2></div>
            <Link to="/products" className="inline-flex items-center gap-2 font-bold text-[#985237] hover:text-[#6f3826]">View all categories <FiArrowRight /></Link>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Beauty & care", "Glow-up favourites", "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=700"],
              ["Fashion", "Everyday style", "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=700"],
              ["Home living", "Make space yours", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=700"],
              ["Tech picks", "Smarter moments", "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=700"],
            ].map(([title, subtitle, image]) => (
              <Link key={title} to="/products" className="group relative h-64 overflow-hidden rounded-3xl bg-[#342722] shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6b4635]/25">
                <img src={image} alt={title} className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-110 group-hover:opacity-60" />
                <div className="absolute inset-x-0 bottom-0 `bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 text-white"><p className="text-sm text-white/75">{subtitle}</p><h3 className="mt-1 text-xl font-bold">{title}</h3></div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[#f4e7dd] py-20">
          <div className="max-w-7xl mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div className="group relative overflow-visible"><img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="ShopSphere team" className=" .h-[340px] w-full rounded-3xl object-cover shadow-xl transition duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl .md:h-[440px]" /><div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#342722] px-5 py-4 text-white shadow-xl transition duration-300 group-hover:-translate-y-2 md:right-6"><p className="text-2xl font-extrabold text-[#efb58d]">10K+</p><p className="text-sm text-white/70">happy shoppers</p></div></div>
            <div><p className="text-sm font-bold tracking-[0.2em] text-[#b9694b]">ABOUT SHOPSPHERE</p><h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#342722]">Shopping should feel simple, personal and joyful.</h2><p className="mt-6 leading-8 text-[#685b54]">ShopSphere brings together useful products, fair prices and a smooth shopping experience. We carefully choose what we feature so you can spend less time searching and more time enjoying what you buy.</p><div className="mt-7 grid grid-cols-2 gap-4"><div className="group rounded-2xl bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"><FiLayers className="text-xl text-[#b9694b] transition group-hover:scale-110" /><p className="mt-2 font-bold">Curated picks</p><p className="mt-1 text-sm text-gray-500">Quality worth discovering</p></div><div className="group rounded-2xl bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"><FiHeart className="text-xl text-[#b9694b] transition group-hover:scale-110" /><p className="mt-2 font-bold">Customer first</p><p className="mt-1 text-sm text-gray-500">Care in every order</p></div></div></div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center"><p className="text-sm font-bold tracking-[0.2em] text-[#b9694b]">A BETTER WAY TO SHOP</p><h2 className="mt-3 text-4xl font-extrabold text-[#342722]">Easy from browse to doorstep.</h2></div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[[FiSearch, "1. Discover", "Browse products that fit your lifestyle."], [FiPackage, "2. Place your order", "A secure, simple checkout in just a few steps."], [FiTruck, "3. Enjoy your delivery", "Track your order until it reaches your door."]].map(([Icon, title, text]) => <div key={title} className="group rounded-3xl border border-[#eadcd3] bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#e3a17e] hover:shadow-xl"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e7da] text-2xl text-[#a85b3d] transition duration-300 group-hover:scale-110 group-hover:bg-[#efb58d]"><Icon /></span><h3 className="mt-5 text-xl font-bold text-[#342722]">{title}</h3><p className="mt-3 leading-7 text-gray-500">{text}</p></div>)}
          </div>
        </section>

        <section className="bg-[#342722] py-20 text-white">
          <div className="max-w-7xl mx-auto px-6"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-bold tracking-[0.2em] text-[#efb58d]">SHOPPER NOTES</p><h2 className="mt-3 text-4xl font-extrabold">Loved for the little things.</h2></div><div className="flex gap-1 text-[#efb58d]">{[1, 2, 3, 4, 5].map((star) => <FiStar key={star} fill="currentColor" />)}</div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[["“The checkout was super easy and the product was exactly as shown.”", "Aarav S."], ["“Beautiful picks, good prices and delivery was quicker than expected.”", "Meera K."], ["“Finally a shopping site that is clean and simple to use.”", "Rohan P."]].map(([quote, name]) => <blockquote key={name} className="rounded-3xl bg-white/10 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl"><p className="text-lg leading-8 text-[#f7eee9]">{quote}</p><footer className="mt-6 flex items-center gap-2 text-sm font-bold text-[#efb58d]"><FiClock /> {name}, verified shopper</footer></blockquote>)}</div></div>
        </section>

        <section className="bg-[#f4e7dd] py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-[#b9694b]">STAY IN THE LOOP</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#342722] md:text-4xl">Good finds, straight to your inbox.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#685b54]">Get early access to fresh picks, special offers and shopping inspiration. No spam—just the good stuff.</p>
            <form onSubmit={subscribe} className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" className="min-w-0 flex-1 rounded-xl border border-[#e3cabe] bg-white px-5 py-4 outline-none transition focus:border-[#a85b3d] focus:ring-2 focus:ring-[#a85b3d]/20" />
              <button className="rounded-xl bg-[#342722] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#4b3931] hover:shadow-lg">Join the list</button>
            </form>
          </div>
        </section>

        <section id="products" className="bg-[#fffdfa] pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-bold tracking-[0.2em] text-[#b9694b]">FRESH PICKS FOR YOU</p>
            <h2 className="mt-3 text-center text-4xl font-extrabold tracking-tight text-[#342722] md:text-5xl">Your next favourite find.</h2>
            <p className="mx-auto mt-4 max-w-xl text-center leading-7 text-gray-500">Explore our most-loved products, chosen to make everyday life a little better.</p>
          </div>
          <ProductList limit={8} />
          <div className="text-center py-10">
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-xl bg-[#342722] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#4b3931] hover:shadow-xl">
              Explore the full collection <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#342722] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#b9694b]">
        <FiArrowUp />
      </button>
      <Footer />
    </div>
  );
}

export default Home;
