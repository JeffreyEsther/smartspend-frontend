import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo container */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-2 border-gray-700">
                <img src={logo} alt="Logo" className="h-10 w-10 object-cover" />
              </div>
              <h1 className="text-lg font-bold tracking-wide italic px-5 py-7">
          <span className="text-red-500">Smart</span>
          <span className="text-white">Spend</span>
        </h1>
            </Link>
          </div>

          {/* Navigation links */}
          <div className="flex items-center space-x-6">
            {/* Search bar */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-0 mt-[-2px]">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-3 pr-10 py-1 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={toggleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  onClick={toggleSearch}
                  className="text-gray-300 hover:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              )}
            </div>

            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>

            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button - hidden on desktop */}
          <div className="flex items-center sm:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - hidden by default */}
      <div className="sm:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
