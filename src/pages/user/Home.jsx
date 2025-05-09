import { useState } from 'react';
import bg3 from '../../assets/images/bg3.jpg'; // Adjusted path if needed

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full overflow-hidden">
        {/* Background image */}
        <div className="relative w-full h-[100vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg3})`,
              filter: 'brightness(0.85)',
            }}
          />
          
          {/* Center content area - moved to middle (yellow circle area) */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Content container with semi-transparent background */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 md:p-10 max-w-lg">
              {/* Heading text */}
              <h1 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
                100% Way To Become.
              </h1>

              {/* Subheading with colored text */}
              <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                Wealthy , <span className="text-[#360e99]">Track Expenses.</span>
              </h2>

              {/* Description text */}
              <p className="text-black text-base md:text-lg mb-8 max-w-md">
              The smartest way to manage your money. Track earnings, monitor
              expenses, and take control of your finances with ease.
              </p>

              {/* Buttons */}
             
            </div>
          </div>

          {/* Cursor - just for visual effect */}
          <div
            className={`absolute w-6 h-6 pointer-events-none transition-opacity duration-300 ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: '80%',
              top: '85%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-full h-full text-white"
              fill="currentColor"
            >
              <path d="M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;