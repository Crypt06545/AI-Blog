"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BlogCard from "./BlogCard";
import { useGetBlogsQuery } from "@/app/redux/api";
import { useState } from "react";
import Loader from "@/components/Loader";
import { Button } from "./ui/button";
import Link from "next/link";

const BlogList = () => {
  const { isLoading, isError, isSuccess, data } = useGetBlogsQuery();
  const [selectedCategory, setSelectedCategory] = useState("account");

  const blogCategory = [
    { path: "account", name: "All" },
    { path: "tech", name: "Tech" },
    { path: "startup", name: "Startup" },
    { path: "life", name: "Life" },
    { path: "finance", name: "Finance" },
  ];

  // Filter the blogs based on selected category
  const filteredBlogs = isSuccess
    ? data.response
        .filter((blog) => {
          if (selectedCategory === "account") return true;
          return blog.category?.toLowerCase() === selectedCategory;
        })
        .slice(0, 4)
    : [];

  return (
    <div className="min-h-[89vh] bg-gray-900">
      {/* Tabs Section */}
      <div className="flex justify-center items-center p-2 sm:p-4">
        <Tabs
          defaultValue="account"
          value={selectedCategory}
          onValueChange={(val) => setSelectedCategory(val)}
          className="w-full overflow-x-auto"
        >
          <TabsList className="bg-gray-800 border border-gray-700 rounded-full flex gap-1 p-1 w-max mx-auto">
            {blogCategory.map((category) => (
              <TabsTrigger
                key={category.path}
                value={category.path}
                className="text-white cursor-pointer px-3 py-1 text-sm sm:text-base sm:px-4 sm:py-2"
              >
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">
                  {category.name.length > 4
                    ? category.name.substring(0, 7)
                    : category.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Blog Cards Section */}
      <div className="w-full mt-4 px-6 md:px-16 lg:px-24 xl:px-32">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[40vh]">
            <Loader />
          </div>
        ) : isError ? (
          <p className="text-red-500 text-center">Failed to load blogs.</p>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid md:grid-cols-4 gap-5">
            {filteredBlogs.map((item) => (
              <BlogCard
                key={item._id}
                image={item.image}
                title={item.title}
                id={item._id}
                description={item.description.replace(/<[^>]+>/g, "")}
                category={item.category || "General"}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-center">
            No blogs found for this category.
          </p>
        )}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button
          variant="outline"
          className="mt-4 text-white cursor-pointer bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors"
        >
           <Link href={`/blogs`}>Show All</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogList;
