import React from 'react';
import sc3 from "../../assets/images/sc3.jpg";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{
            backgroundImage: `url(${sc3})`,
            filter: "brightness(0.85)",
          }}>
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Section: Login Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Login to your account!</h1>
          <p className="text-gray-500 mb-6">Welcome back</p>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                />
                Remember Me
              </label>
              <a href="#" className="text-red-400 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>
            <button
              type="button"
              className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-pink-500 transition"
            >
              Login
            </button>
          </form>
        </div>
        {/* Right Section: Image */}
        <div className="w-1/2 bg-yellow-100 flex items-center justify-center">
          <img
            src={sc3}
            alt="People collaborating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;