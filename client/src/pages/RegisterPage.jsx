// client/src/pages/RegisterPage.jsx

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(username, email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    // DARK THEME: Removed old light-mode classes. Pulling up with negative margin.
    <div className="flex items-center justify-center px-4 -mt-16 sm:-mt-20">
      {/* CARD: Converted to a "glassmorphism" dark-mode card. */}
      <div
        className="w-full max-w-md bg-neutral-900/90 backdrop-blur-md p-8 rounded-2xl
                   border border-neutral-800 shadow-xl"
      >
        {/* NEON HEADING: Applied arcade font, size, color, and glow effect. */}
        <h2
          className="text-center text-5xl font-arcade text-cyan-400 
                     text-shadow-glow mb-8"
        >
          Create Account
        </h2>

        {/* DARK ERROR: Styled error message for dark mode. */}
        {error && (
          <p
            className="text-red-400 text-sm text-center bg-red-900/50
                       p-3 rounded-lg border border-red-700 mb-5"
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            {/* MODERN LABEL */}
            <label className="block text-sm font-medium text-neutral-400 mb-1">
              Username
            </label>
            {/* MODERN INPUT: Replaced border-b with a modern, rounded input. */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">
              Email
            </label>
            {/* MODERN INPUT */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">
              Password
            </label>
            {/* MODERN INPUT */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* ARCADE BUTTON: Styled to be the primary 'cyan' action button. */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-black py-2 rounded-lg font-semibold
                       tracking-wide hover:bg-cyan-400 transition-colors
                       duration-200 shadow-lg shadow-cyan-500/20"
          >
            Register
          </button>
        </form>

        {/* DARK LINK: Styled bottom link for dark mode. */}
        <p className="text-center mt-6 text-sm text-neutral-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-cyan-400 hover:underline hover:text-cyan-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;