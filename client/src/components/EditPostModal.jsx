import React, { useState } from "react";
import api from "../api/api";

const EditPostModal = ({ post, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: post.title,
    content: post.content,
    category: post.category,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.put(`/posts/${post._id}`, formData);
      onSave(response.data);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update post.");
    }
  };

  return (
    // DARK BACKDROP: Swapped light bg for dark, kept blur/centering
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      {/* DARK CARD: Swapped parchment bg for dark glassmorphism */}
      <div
        className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl
                   w-full max-w-lg p-8 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* NEON HEADING: Applied arcade font, color, and glow */}
        <h2 className="font-arcade text-4xl text-cyan-400 text-shadow-glow mb-6 text-center">
          ✎ Edit Your Note
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            // DARK ERROR: Styled error for dark mode
            <p
              className="text-red-400 text-sm text-center bg-red-900/50
                         p-3 rounded-lg border border-red-700"
            >
              {error}
            </p>
          )}

          <div>
            {/* MODERN LABEL */}
            <label className="block mb-1 font-medium text-sm text-neutral-400">
              Title
            </label>
            {/* MODERN INPUT: Replaced border-b with modern, rounded input */}
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-neutral-400">
              Content
            </label>
            {/* MODERN TEXTAREA: Styled to match modern inputs */}
            <textarea
              name="content"
              rows="5"
              value={formData.content}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-neutral-400">
              Category
            </label>
            {/* MODERN INPUT */}
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg
                         py-2 px-3 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 text-neutral-100
                         placeholder-neutral-500 transition-colors"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-6">
            {/* DARK BUTTON (Cancel) */}
            <button
              type="button"
              onClick={onClose}
              className="bg-neutral-800 text-neutral-300 px-5 py-2 rounded-lg
                         hover:bg-neutral-700 transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
            {/* ARCADE BUTTON (Save) */}
            <button
              type="submit"
              className="bg-cyan-500 text-black px-5 py-2 rounded-lg
                         hover:bg-cyan-400 transition-all duration-200 font-semibold
                         shadow-lg shadow-cyan-500/20"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;