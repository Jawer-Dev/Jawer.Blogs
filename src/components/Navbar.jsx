import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewsletterModal from "./NewsletterModal";

const Navbar = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
          >
            JawerBlogs
          </Link>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsNewsletterOpen(true)}
              className="hidden sm:block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
            >
              Newsletter
            </button>
          </div>
        </div>
      </nav>
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </>
  );
};

export default Navbar;
