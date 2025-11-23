// client/src/pages/LoginPage.jsx

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    // DARK THEME: Removed old light-mode classes. This page now
    // inherits the global dark bg from App.jsx.
    <div className="flex items-center justify-center p-4 md:p-6 -mt-16 sm:-mt-20">
      {/* CARD: Converted to a "glassmorphism" dark-mode card. */}
      <div
        className="w-full max-w-md bg-neutral-900/90 backdrop-blur-md p-8 rounded-2xl
                   border border-neutral-800 shadow-xl"
      >
        {/* NEON HEADING: Applied arcade font, size, color, and glow effect. */}
        <h2
          className="font-arcade text-5xl text-cyan-400 text-shadow-glow
                     text-center mb-2"
        >
          Welcome Back
        </h2>
        <p className="text-center text-neutral-400 mb-8 text-sm tracking-wide">
          Sign in to continue your story ✍️
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            // DARK ERROR: Styled error message for dark mode.
            <p
              className="text-red-400 text-sm text-center bg-red-900/50
                         p-3 rounded-lg border border-red-700"
            >
              {error}
            </p>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">
              Email
            </label>
            {/* MODERN INPUT: Replaced border-b with a modern, rounded input. */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">
              Password
            </label>
            {/* MODERN INPUT: Applied same style as email input. */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* ARCADE BUTTON: Styled to be the primary 'cyan' action button. */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-black py-2 rounded-lg font-semibold
                       tracking-wide hover:bg-cyan-400 transition-colors
                       duration-200 shadow-lg shadow-cyan-500/20"
          >
            Sign In
          </button>
        </form>

        {/* DARK LINK: Styled bottom link for dark mode. */}
        <p className="text-center mt-6 text-sm text-neutral-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 font-semibold hover:underline hover:text-cyan-300"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;