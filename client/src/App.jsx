// client/src/App.jsx

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";

// 🌿 Dark Arcade App Wrapper
function App() {
  return (
    // Global dark theme, modern font, and neon selection
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-inter
                    selection:bg-cyan-500 selection:text-black">
      
      {/* 🧭 Global Navbar */}
      <Navbar />

      {/* Main content — added padding for better spacing */}
      <main className="py-6 sm:py-10 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

      {/* Global subtle footer, now with an arcade font */}
      <footer className="text-center text-sm text-neutral-600 py-8">
        <p className="font-arcade text-lg tracking-wide text-neutral-500">
          © {new Date().getFullYear()} 👾RETRO-BOARD ✦ Crafted with RedBull🐂
        </p>
      </footer>
    </div>
  );
}

export default App;