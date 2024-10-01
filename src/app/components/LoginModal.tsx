'use client';

import React, { useState } from 'react';

// Define the types for user categories
type UserType = 'Student' | 'Instructor' | 'School';

const LoginModal: React.FC = () => {
  const [userType, setUserType] = useState<UserType>('Student');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle category change
  const handleCategoryChange = (type: UserType) => {
    setId(''); // Reset ID field
    setPassword(''); // Reset Password field
    setUserType(type); // Update user type
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !password) {
      setError('Please fill in all fields');
      return;
    }
    console.log(`Logging in as ${userType}:`, { id, password });
    // Can send the login request to backend from here
  };

  // Function to handle "Forgot Password" click
  const handleForgotPassword = () => {
    console.log('Redirecting to password recovery page...');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 transition-all duration-300">
        <h2 className="text-black text-2xl font-bold mb-4">Login</h2>

        {/* User Type Switcher */}
        <div className="flex justify-between mb-4">
          {['Student', 'Instructor', 'School'].map((type) => (
            <button
              key={type}
              onClick={() => handleCategoryChange(type as UserType)}
              className={`px-4 py-2 rounded transition-all duration-300 ${
                userType === type
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="text-black block mb-2">
              {userType} ID
            </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="text-gray-600 w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-black block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-gray-600 w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleForgotPassword}
          className="text-blue-500 mt-4 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default LoginModal;