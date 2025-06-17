"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import {
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
  useGenAiContetnMutation,
} from "@/app/redux/api";
import LoaderSpinner from "@/components/LoaderSpinner";

const UpdateBlog = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: blog, isLoading: isBlogFetching } = useGetBlogByIdQuery(id, {
    skip: !id,
  });
  // console.log(blog);

  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();
  const [genAiContent, { isLoading: isGenLoading }] = useGenAiContetnMutation();

  const editorRef = useRef(null);
  const quilRef = useRef(null);

  // Controlled inputs
  const [title, setTitle] = useState("");
  const router = useRouter();
  const [category, setCategory] = useState("startup");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch blog content and set default field values
  useEffect(() => {
    if (blog) {
      setTitle(blog.title || "");
      setCategory(blog.category || "startup");
      setImagePreview(blog.image || "");
    }
  }, [blog]);

  // Set default Quill content
  useEffect(() => {
    if (quilRef.current && blog?.description) {
      quilRef.current.root.innerHTML = blog.description;
    }
  }, [blog]);

  // Initialize Quill
  useEffect(() => {
    const initializeQuill = async () => {
      const Quill = await import("quill");
      if (editorRef.current && !quilRef.current) {
        quilRef.current = new Quill.default(editorRef.current, {
          theme: "snow",
        });
      }
    };
    initializeQuill();
  }, []);

  const generateContent = async () => {
    if (!title) return toast.error("Please enter a title!");

    try {
      const res = await genAiContent(title).unwrap();
      if (res?.success && res?.content) {
        if (quilRef.current) {
          quilRef.current.root.innerHTML = res.content;
        }
        toast.success("AI content generated!");
      } else {
        toast.error("Failed to generate content.");
      }
    } catch (error) {
      toast.error(error?.data?.error || "Failed to generate content.");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!quilRef.current) return;

    const description = quilRef.current.root.innerHTML;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    try {
      const res = await updateBlog({ id, formdata: formData }).unwrap();
      if (res?.success) {
        toast.success("Blog Updated SuccessFully");
        router.push("/");
      }
    } catch (error) {
      toast.error(error.message || "Falied To Update!");
    }

    //  console.log(fr);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-3xl mx-auto px-4 py-8 space-y-6"
    >
      {/* Image Upload */}
      <div className="space-y-2">
        <Label htmlFor="image">Upload Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setImage(file);
              setImagePreview(URL.createObjectURL(file));
            }
          }}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 w-full max-w-xs rounded border"
          />
        )}
      </div>

      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Blog Title</Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          className="w-full border px-3 py-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="startup">Startup</option>
          <option value="tech">Tech</option>
          <option value="growth">Growth</option>
          <option value="design">Design</option>
        </select>
      </div>

      {/* Quill Editor */}
      <div className="space-y-2">
        <Label>Blog Description</Label>
        <div className="relative border rounded-md h-72 overflow-y-auto">
          <div ref={editorRef} className="h-full" />
          <Button
            type="button"
            onClick={generateContent}
            disabled={isGenLoading}
            className="absolute bottom-2 right-2 text-xs px-4 py-1.5 bg-zinc-800 text-white hover:bg-zinc-700 transition rounded"
          >
            {isGenLoading ? <LoaderSpinner /> : "Generate with AI"}
          </Button>
        </div>
      </div>

      {/* Submit */}
      <div>
        <Button type="submit" disabled={isUpdating}>
          {isUpdating ? <LoaderSpinner /> : "Update Blog"}
        </Button>
      </div>
    </form>
  );
};

export default UpdateBlog;
