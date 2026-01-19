import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { posts } from "../data/posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [progress, setProgress] = useState(0);

  // Update document title and meta tags for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - JawerBlogs`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.excerpt;
        document.head.appendChild(meta);
      }

      // Update Open Graph tags
      const updateOGTag = (property, content) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', property);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      };

      updateOGTag('og:title', post.title);
      updateOGTag('og:description', post.excerpt);
      updateOGTag('og:image', post.image);
      updateOGTag('og:url', `https://jawerblog.com/post/${post.id}`);
      updateOGTag('og:type', 'article');
    }
  }, [post]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center text-slate-400 dark:text-slate-500 text-xl">
        <h1>Post not found.</h1>
      </main>
    );
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50 transition-all"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <article className="max-w-3xl mx-auto px-6 py-20 min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-500 mb-14 group transition-colors"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to overview
        </Link>

        <header className="mb-14">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-sm text-slate-600 dark:text-slate-400">
              {post.date} • {post.readTime}
            </time>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <img 
          src={post.image} 
          alt={post.title}
          loading="lazy"
          className="w-full rounded-lg mb-10 h-auto"
        />

        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p className="text-lg leading-loose text-slate-800 dark:text-slate-300 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-slate-100" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-slate-900 dark:text-slate-100" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mt-4 mb-4 text-slate-800 dark:text-slate-300" {...props} />,
            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 my-4 italic text-slate-700 dark:text-slate-400" {...props} />,
            code: ({ node, ...props }) => <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-slate-900 dark:text-slate-100 text-sm" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>

        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Published on <time dateTime={post.date}>{post.date}</time> in {post.category}
          </p>
        </footer>
      </article>
    </>
  );
};

export default PostDetail;
