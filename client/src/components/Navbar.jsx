// client/src/components/Navbar.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    // DARK THEME: Replaced light bg/border with dark, keeping sticky/blur
    <nav className="bg-neutral-950/90 border-b border-neutral-800 shadow-sm
                    sticky top-0 z-40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* NEON HEADING: Swapped font, made larger, added neon color + glow */}
        <Link
          to="/"
          className="font-arcade text-4xl sm:text-5xl text-cyan-400 
                     text-shadow-glow hover:text-cyan-300 transition-colors duration-300"
        >
          🪶QuillBoard        </Link>

        {/* MODERN UI: Using font-inter (from App.jsx) and new dark-theme buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {user ? (
            <>
              <span className="hidden sm:block text-sm sm:text-base text-neutral-400">
                Welcome,{" "}
                <span className="font-semibold text-neutral-100">
                  {user.username}
                </span>
              </span>

              {/* DARK STYLING: Simple text button, red hover for "danger" */}
              <button
                onClick={handleLogout}
                className="text-neutral-400 hover:text-red-500
                           px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* DARK STYLING: Simple text link */}
              <Link
                to="/login"
                className="text-neutral-400 hover:text-neutral-100 
                           px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg"
              >
                Login
              </Link>

              {/* ARCADE ACCENT: Using cyan for the primary CTA button */}
              <Link
                to="/register"
                className="bg-cyan-500 text-black px-4 py-2 rounded-lg text-sm font-semibold
                           hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;