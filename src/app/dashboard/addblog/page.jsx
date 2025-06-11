"use client";

import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import { Input } from "@/components/ui/input";

const AddBlogPage = () => {
  const editorRef = useRef(null);
  const quilref = useRef(null);

  useEffect(() => {
    // Dynamically import quill only on client
    import("quill").then((Quill) => {
      if (!quilref.current && editorRef.current) {
        quilref.current = new Quill.default(editorRef.current, { theme: "snow" });
      }
    });
  }, []);

  return (
    <div className="">
      <Input className="w-full" type="email" placeholder="Email" />
      <p className="mt-4 text-zinc-900 font-semibold">Blog Description</p>
      <div className="max-w-lg h-72 pb-16 sm:pb-10 pt-2 relative border border-zinc-300 rounded-md focus-within:ring-2 focus-within:ring-blue-300">
        <div ref={editorRef} className="h-full" />
        <button
          type="button"
          className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
        >
          Generate with AI
        </button>
      </div>
    </div>
  );
};

export default AddBlogPage;
