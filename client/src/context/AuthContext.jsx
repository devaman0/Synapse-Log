// client/src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api"; // 🎮 API helper

// 🧩 1. Create Authentication Context
const AuthContext = createContext();

// ⚡ 2. AuthProvider — wraps entire app and manages user state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 🟣 On mount — restore user session from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 💫 --- AUTH FUNCTIONS (logic unchanged) ---

  // 🔓 Login existing user
  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });

      // Store user locally + in state
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      return response;
    } catch (error) {
      console.error("%c⚠️ Login Error:", "color:#ff6666", error);
      throw error;
    }
  };

  // ✨ Register a new user
  const register = async (username, email, password) => {
    try {
      const response = await api.post("/auth/register", {
        username,
        email,
        password,
      });

      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      return response;
    } catch (error) {
      console.error("%c⚠️ Registration Error:", "color:#ff6666", error);
      throw error;
    }
  };

  // 🚪 Logout user (clear local + memory)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("%c👾 User logged out.", "color:#9b5de5");
  };

  // 🎛️ Provide context values
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🎯 4. Custom hook — useAuth() for easy access
export const useAuth = () => useContext(AuthContext);
