import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="`bg-gradient-to-b from-[#2F2A26] to-[#1F1A16] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#D9B99B]">ShopSphere</h2>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for premium fashion, electronics, and
              lifestyle products delivered with excellence.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#8B5E3C] hover:bg-[#C97C5D] flex items-center justify-center transition transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#8B5E3C] hover:bg-[#C97C5D] flex items-center justify-center transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#8B5E3C] hover:bg-[#C97C5D] flex items-center justify-center transition transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#8B5E3C] hover:bg-[#C97C5D] flex items-center justify-center transition transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D9B99B]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                Products
              </li>
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                Wishlist
              </li>
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                About Us
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D9B99B]">
              Support
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                FAQs
              </li>
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-[#D9B99B] cursor-pointer transition">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D9B99B]">
              Get In Touch
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <FiMail className="text-[#C97C5D]" />
                <a
                  href="mailto:support@shopsphere.com"
                  className="hover:text-[#D9B99B] transition"
                >
                  support@shopsphere.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#C97C5D]" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#D9B99B] transition"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#C97C5D] mt-1" />
                <p>123 Shopping Street, NY 10001, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ShopSphere. All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">
              Made with ❤️ for shopping enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
