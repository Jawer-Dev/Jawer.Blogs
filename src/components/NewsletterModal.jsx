import React, { useState } from "react";
import { X, Mail, Check } from "lucide-react";

const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in production, replace with actual newsletter API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store subscription in localStorage (you can replace this with API call)
      const subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions") || "[]");
      subscriptions.push({
        email,
        name,
        subscribedAt: new Date().toISOString(),
      });
      localStorage.setItem("newsletterSubscriptions", JSON.stringify(subscriptions));

      // Log subscription for reference (in production, send to your backend/API)
      console.log("Newsletter subscription:", { name, email });

      setIsSuccess(true);
      setName("");
      setEmail("");

      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setEmail("");
      setName("");
      setError("");
      setIsSuccess(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md p-8 relative transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors disabled:opacity-50"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
              <Check size={32} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
              Thank you for subscribing!
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              You'll receive our monthly newsletter with the latest updates.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <Mail size={32} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                Subscribe to our Newsletter
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Get monthly updates with my favorite finds in design and engineering.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
