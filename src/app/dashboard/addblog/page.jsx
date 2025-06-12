"use client";
import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useAddBlogMutation } from "@/app/redux/api";

const AddBlogPage = () => {
  const [addBlog, { isLoading, isError, isSuccess, data, error }] =
    useAddBlogMutation();

  // console.log(isLoading,isError,isSuccess,data,error);
  const editorRef = useRef(null);
  const quilref = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("startup");
  // generateContent

  const generateContent = async () => {
    // Placeholder for AI content generation
    const defaultText = "Generated blog content...";
    quilref.current?.clipboard.dangerouslyPasteHTML(defaultText);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const description = quilref.current?.root.innerHTML;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("author", "mehadi");
    formData.append("authorImg", "mehadi");

    try {
      const result = await fetch("/api/addblog", {
        method: "POST",
        body: formData,
      });

      const data = await result.json();

      if (data.success) {
        toast.success("Blog created successfully!");
      } else {
        toast.error(data.error || "Failed to create blog.");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred.");
      console.error(error);
    }
  };

  useEffect(() => {
    import("quill").then((Quill) => {
      if (!quilref.current && editorRef.current) {
        quilref.current = new Quill.default(editorRef.current, {
          theme: "snow",
        });
      }
    });
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
          onChange={(e) => setImage(e.target.files[0])}
          id="image"
          type="file"
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
        />
      </div>

      {/* Blog Sub Title */}
      <div className="space-y-2">
        <Label htmlFor="subtitle" className="text-zinc-700 font-medium">
          Sub Title
        </Label>
        <Input
          id="subtitle"
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
        <div className="relative border border-zinc-300 rounded-md h-72 overflow-hidden">
          <div ref={editorRef} className="h-full" />
          <Button
            type="button"
            onClick={generateContent}
            className="cursor-pointer absolute bottom-2 right-2 text-xs px-4 py-1.5 bg-zinc-800 text-white hover:bg-zinc-700 transition rounded"
          >
            Generate with AI
          </Button>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <Button type="submit" className="cursor-pointer">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddBlogPage;
