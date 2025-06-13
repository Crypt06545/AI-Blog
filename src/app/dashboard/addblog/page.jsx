"use client";
import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useAddBlogMutation, useGenAiContetnMutation } from "@/app/redux/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import { useUser } from "@clerk/nextjs";

const AddBlogPage = () => {
  const [addBlog, { isLoading }] = useAddBlogMutation();
  const [genAiContent, { isLoading: isGenLoading }] = useGenAiContetnMutation();
  const editorRef = useRef(null);
  const quilRef = useRef(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  const [authorPhoto, setAuthorPhoto] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("startup");
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      // console.log(user?.fullName);
      setUserName(user?.fullName);
      // setEmail(user?.primaryEmailAddress?.emailAddress);
      setAuthorPhoto(user?.imageUrl);
    }
  }, [isLoaded, user]);

  const generateContent = async () => {
    if (!title) return toast.error("Please Enter a title!");

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
      toast.error(error?.data?.error || error.message || "Failed to generate.");
      console.error("AI Error:", error);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!quilRef.current) return;

    const description = quilRef.current.root.innerHTML;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("category", category);
    formData.append("description", description);
    if (image) formData.append("image", image);
    formData.append("author", userName);
    formData.append("authorImg", authorPhoto);

    try {
      const result = await addBlog(formData).unwrap();

      if (result.success) {
        toast.success("Blog created successfully!");
        // Reset form
        setTitle("");
        setSubTitle("");
        setImage(false);
        setCategory("startup");
        if (quilRef.current) {
          quilRef.current.root.innerHTML = "";
        }
      }
    } catch (error) {
      toast.error(
        error.data?.error || error.message || "An unexpected error occurred."
      );
      console.error(error);
    }
  };

  useEffect(() => {
    let quillInstance;
    const initializeQuill = async () => {
      const Quill = await import("quill");
      if (editorRef.current && !quilRef.current) {
        quillInstance = new Quill.default(editorRef.current, {
          theme: "snow",
        });
        quilRef.current = quillInstance;
      }
    };

    initializeQuill();

    return () => {
      if (quillInstance) {
        quillInstance = null;
      }
    };
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-3xl mx-auto px-4 py-8 space-y-6"
    >
      {/* Image Upload */}
      <div className="space-y-2">
        <Label htmlFor="image" className="text-zinc-700 font-medium">
          Upload Image
        </Label>
        <Input
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          id="image"
          type="file"
          accept="image/*"
        />
      </div>

      {/* Blog Title */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-zinc-700 font-medium">
          Blog Title
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter blog title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>

      {/* Blog Sub Title */}
      <div className="space-y-2">
        <Label htmlFor="subtitle" className="text-zinc-700 font-medium">
          Sub Title
        </Label>
        <Input
          id="subtitle"
          required
          type="text"
          placeholder="Enter blog subtitle"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />
      </div>

      {/* Blog Category */}
      <div className="space-y-2">
        <Label htmlFor="category" className="text-zinc-700 font-medium">
          Category
        </Label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
          value={category}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        >
          <option value="startup">Startup</option>
          <option value="tech">Tech</option>
          <option value="growth">Growth</option>
          <option value="design">Design</option>
        </select>
      </div>

      {/* Blog Description (Quill Editor) */}
      <div className="space-y-2">
        <Label className="text-zinc-700 font-medium">Blog Description</Label>
        <div className="relative border border-zinc-300 rounded-md h-72 overflow-y-auto">
          <div ref={editorRef} className="h-full" />

          <Button
            type="button"
            onClick={generateContent}
            disabled={isGenLoading}
            className="cursor-pointer absolute bottom-2 right-2 text-xs px-4 py-1.5 bg-zinc-800 text-white hover:bg-zinc-700 transition rounded"
          >
            {isGenLoading ? <LoaderSpinner /> : "Generate with AI"}
          </Button>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          disabled={isLoading}
          type="submit"
          className="cursor-pointer"
          aria-disabled={isLoading}
        >
          {isLoading ? <LoaderSpinner /> : "Add Blog"}
        </Button>
      </div>
    </form>
  );
};

export default AddBlogPage;
