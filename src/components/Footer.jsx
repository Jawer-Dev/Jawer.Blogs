import React from "react";
import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-slate-200 dark:border-slate-800 mt-20 py-16 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Let's stay in touch.</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        I send out a monthly newsletter with my favorite finds in design and engineering.
      </p>
      <div className="flex space-x-6 text-slate-500 dark:text-slate-400 mb-10">
        <a 
          href="mailto:jawer.contact@gmail.com"
          className="hover:text-indigo-500 transition-colors cursor-pointer"
          aria-label="Send email"
        >
          <Mail size={24} />
        </a>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-xs tracking-widest uppercase">© 2025 Jawer.dev</p>
    </div>
  </footer>
);

export default Footer;
