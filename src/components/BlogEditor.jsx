"use client";

import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const BlogEditor = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write your blog here...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "bullet" }],
            ["link", "image"],
          ],
        },
      });
    }
  }, []);

  return (
    <div
      ref={editorRef}
      className="h-[300px] bg-white border border-gray-300 rounded-lg"
    />
  );
};

export default BlogEditor;
