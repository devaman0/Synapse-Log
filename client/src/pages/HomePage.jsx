// client/src/pages/HomePage.jsx

import React, { useState, useEffect } from "react";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";
import EditPostModal from "../components/EditPostModal";

const HomePage = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [formError, setFormError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/posts");
      setPosts(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!title || !content) return setFormError("Title and Content required.");

    try {
      const res = await api.post("/posts", { title, content, category });
      const newPost = { ...res.data, user: { username: user.username } };
      setPosts([newPost, ...posts]);
      setTitle("");
      setContent("");
      setCategory("Technology");
      setFormError("");
    } catch (err) {
      setFormError("Failed to create post.");
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm("Delete this post?")) return;
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter((p) => p._id !== id));
    } catch (err) {
      setError("Failed to delete post.");
    }
  };

  const openEditModal = (post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map((p) => (p._id === updatedPost._id ? updatedPost : p)));
  };

  return (
    // DARK THEME: Removed all old light-mode styles (bg-cream, text-ink, etc)
    // They are now inherited from App.jsx
    <div className="transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {user && (
          <div className="md:col-span-1">
            {/* DARK CARD: Replaced parchment bg with dark glassmorphism */}
            <div
              className="bg-neutral-900/90 backdrop-blur-md p-6 rounded-2xl
                         border border-neutral-800 shadow-xl sticky top-24"
            >
              {/* NEON HEADING */}
              <h3
                className="font-arcade text-4xl text-cyan-400 text-shadow-glow
                           mb-6 text-center"
              >
                🎮 Create a New LOG !!
              </h3>
              <form onSubmit={handleCreatePost} className="space-y-5">
                {formError && (
                  // DARK ERROR
                  <p
                    className="text-red-400 text-sm text-center bg-red-900/50
                               p-3 rounded-lg border border-red-700"
                  >
                    {formError}
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Title
                  </label>
                  {/* MODERN INPUT */}
                  <input
                    type="text"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                               py-2 px-3 focus:outline-none focus:border-cyan-500
                               focus:ring-1 focus:ring-cyan-500 text-neutral-100
                               placeholder-neutral-500 transition-colors"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Content
                  </label>
                  {/* MODERN TEXTAREA */}
                  <textarea
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                               py-2 px-3 focus:outline-none focus:border-cyan-500
                               focus:ring-1 focus:ring-cyan-500 text-neutral-100
                               placeholder-neutral-500 transition-colors resize-none"
                    rows="5"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Category
                  </label>
                  {/* MODERN INPUT */}
                  <input
                    type="text"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                               py-2 px-3 focus:outline-none focus:border-cyan-500
                               focus:ring-1 focus:ring-cyan-500 text-neutral-100
                               placeholder-neutral-500 transition-colors"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                {/* ARCADE BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-black py-2 rounded-lg font-semibold
                             tracking-wide hover:bg-cyan-400 transition-colors
                             duration-200 shadow-lg shadow-cyan-500/20"
                >
                  👆 UpLOad O-o
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Post List */}
        <div className={user ? "md:col-span-2" : "md:col-span-3"}>
          {/* NEON HEADING */}
          <h2
            className="font-arcade text-6xl text-cyan-400 text-shadow-glow
                       mb-8"
          >
            Current Logs
          </h2>

          {loading && <p className="text-neutral-400">Loading notes...</p>}
          {error && <p className="text-red-400">{error}</p>}

          <div className="space-y-8">
            {posts.map((post) => {
              const isAuthor = user && post.user && user._id === post.user._id;
              return (
                // DARK POST CARD: Replaced parchment with dark bg/border
                <div
                  key={post._id}
                  className="bg-neutral-900 p-6 rounded-2xl shadow-xl
                             border border-neutral-800
                             hover:border-neutral-700 transition-all"
                >
                  <div className="flex justify-between items-center mb-3">
                    {/* ARCADE BADGE: Replaced yellow badge with cyan */}
                    <span
                      className="text-xs font-semibold text-cyan-300 bg-cyan-900/60
                                 px-3 py-1 rounded-full"
                    >
                      {post.category}
                    </span>
                    {/* DARK TEXT */}
                    <span className="text-sm text-neutral-500">
                      by {post.user?.username || "Unknown"}
                    </span>
                  </div>

                  {/* CLASSY FONT: Kept Playfair, but made text light */}
                  <h3 className="font-playfair text-3xl text-neutral-100 mb-3">
                    {post.title}
                  </h3>

                  {/* CLASSY FONT: Kept Lora, made text light, and fixed font size */}
                  <p
                    className="font-lora text-neutral-300 whitespace-pre-wrap
                               leading-relaxed text-base"
                  >
                    {post.content}
                  </p>

                  {isAuthor && (
                    <div className="mt-4 flex justify-end space-x-4 text-sm">
                      {/* DARK BUTTONS: Styled edit/delete for dark mode */}
                      <button
                        onClick={() => openEditModal(post)}
                        className="text-neutral-500 hover:text-cyan-400 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePost(post._id)}
                        className="text-neutral-500 hover:text-red-500 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {isModalOpen && editingPost && (
          <EditPostModal
            post={editingPost}
            onClose={() => setIsModalOpen(false)}
            onSave={handleUpdatePost}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;