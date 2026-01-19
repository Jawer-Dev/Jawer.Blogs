import React, { useMemo, useState } from "react";
import { posts } from "../data/posts";

import SearchFilter from "../components/SearchFilter";
import PostCard from "../components/PostCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((p) => p.category))];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-slate-100">
          The <span className="text-indigo-600">Frontend</span> Journal.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
          Discover insights on web development, React architecture, AI integration, and modern technology trends.
        </p>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-slate-400 dark:text-slate-500">No articles found matching your criteria.</div>
      )}
    </main>
  );
};

export default Home;
