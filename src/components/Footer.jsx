import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import sc1 from "../assets/images/sc1.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* App Logo & Description */}
        <div>
        <h1 className="text-3xl font-bold tracking-wide italic ">
          <span className="text-red-500">Smart</span>
          <span className="text-white">Spend</span>
        </h1>
          <p className="text-sm text-gray-200 leading-relaxed">
            The smartest way to manage your money. Track earnings, monitor
            expenses, and take control of your finances with ease.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/income" className="hover:text-blue-500 transition">
                Income
              </Link>
            </li>
            <li>
              <Link to="/expenses" className="hover:text-blue-500 transition">
                Expenses
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-blue-500 transition">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-blue-500 transition">
                Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* QR Code Section */}
        <div>
          <h2 className="text-lg font-semibold text-blue-500 mb-4">Scan & Download</h2>
          <img
            src={sc1}// Change this to your actual path
            alt="Download App QR"
            className="w-28 h-28 rounded-md border border-gray-700"
          />
          <p className="text-sm text-gray-400 mt-2">
            Scan to access your expense tracker anywhere, anytime.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-blue-500 mb-4">Connect With Us</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ExpenseMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
