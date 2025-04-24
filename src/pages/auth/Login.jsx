import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { apiLogin } from '../../services/auth';
import sc3 from '../../assets/images/sc3.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await apiLogin({ identifier, password });

      const { token, admin } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('admin', admin.role);

      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setError(
        // error.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${sc3})`,
        filter: 'brightness(0.85)',
      }}
    >
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Login to your account!
          </h1>
          <p className="text-gray-500 mb-6">Welcome back</p>
          {error && (
            <p className="text-red-500 mb-4" role="alert">
              {error}
            </p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                name="identifier"
                type="text"
                placeholder="Email or Username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
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
              type="submit"
              className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-pink-500 transition"
            >
              Login
            </button>
          
          </form>
        </div>
        
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