import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const PostCard = ({ post }) => (
  <article className="group">
    <Link to={`/post/${post.id}`} className="block">
      <div className="mb-5 overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 aspect-[16/10] relative">
        {/* Image with lazy loading */}
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="flex items-center justify-between mb-3 text-xs font-bold uppercase tracking-widest text-indigo-500">
        <span>{post.category}</span>
        <time dateTime={post.date} className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
          <Clock size={12} /> {post.readTime}
        </time>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-indigo-500 transition-colors leading-tight">
        {post.title}
      </h3>

      <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
        {post.excerpt}
      </p>
    </Link>
  </article>
);

export default PostCard;
