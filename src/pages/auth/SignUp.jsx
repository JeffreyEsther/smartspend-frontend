import React from "react";
import sc2 from "../../assets/images/sc2.jpg";

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${sc2})`,
        filter: "brightness(0.85)",
      }}
    >
      <div className="flex w-full max-w-2xl min-h-2.5  bg-white  shadow-lg overflow-hidden">
        {/* Left Section: Signup Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create an account!
          </h1>
          <p className="text-blue-500 mb-6">Join us today</p>
          <form className="space-y-4">
          <div>
              <input
                type="text"
                placeholder="Fullname"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
           
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
            <button
              type="button"
              className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-red-500 transition"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#000"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.22-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1.14-1.39-2.07-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.81 3.98-2.1 5.39z"
                />
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#000"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 16h-2v-2h2v2zm0-4h-2v-6h2v6zm-4 4h-2v-2h2v2zm0-4h-2v-6h2v6zm-4 4H7v-2h2v2zm0-4H7v-6h2v6z"
                />
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#000"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-2h2v2zm0-4h-2v-6h2v6zm4 4h-2v-2h2v2zm0-4h-2v-6h2v6z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Right Section: Image */}
        <div className="w-1/2 bg-yellow-100 flex items-center justify-center">
          <img
            src={sc2}
            alt="People collaborating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
