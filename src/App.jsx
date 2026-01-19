import React, { useState, useEffect, useLayoutEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PostDetail from "./pages/PostDetail.jsx";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    // Get initial theme from localStorage or default to light
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved === "dark";
    }
    return false;
  });

  // Use useLayoutEffect to apply theme class synchronously before paint
  useLayoutEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  // Save to localStorage after render
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
