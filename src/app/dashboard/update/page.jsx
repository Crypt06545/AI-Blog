"use client";
import { useGetBlogByIdQuery } from "@/app/redux/api";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const UpdateBlog = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    data: blog,
    isLoading,
    isError,
  } = useGetBlogByIdQuery(id, {
    skip: !id,
  });

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        image: blog.image || "",
        description: blog.description || "",
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated blog data:", formData);
    // Add your update logic here (mutation)
  };

  if (isLoading) return <Loader />;
  if (isError) return <div className="text-red-600">Error loading blog</div>;
  if (!blog) return <div className="text-red-600">Blog not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Update Blog: {blog.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
          />
        </div>

        {/* Image Field */}
        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Blog"
              className="mt-2 h-40 rounded object-cover"
            />
          )}
        </div>

        {/* Description Field */}
        <div>
          <Label htmlFor="description">Description (HTML)</Label>
          <Textarea
            id="description"
            name="description"
            rows="10"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter HTML content"
          />
          <div className="mt-2 p-4 border rounded bg-gray-50">
            <p className="text-sm font-medium mb-1 text-gray-600">Preview:</p>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.description }}
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default UpdateBlog;
