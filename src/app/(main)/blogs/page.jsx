"use client";
import { useGetBlogsQuery } from "@/app/redux/api";
import BlogCard from "@/components/BlogCard";
import Loader from "@/components/Loader";
import React from "react";

const BlogPage = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetBlogsQuery();
  const blogs = data?.response;
  console.log(blogs);
  

  // console.log(isLoading,isError,isSuccess,data,error);

  return (
    <div className="min-h-screen">
      This is blog page
      {/* Blog Cards Section */}
      <div className="w-full mt-4 px-6 md:px-16 lg:px-24 xl:px-32">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[40vh]">
            <Loader />
          </div>
        ) : isError ? (
          <p className="text-red-500 text-center">Failed to load blogs.</p>
        ) : blogs.length > 0 ? (
          <div className="grid md:grid-cols-4 gap-5">
            {blogs.map((item) => (
              <BlogCard
                key={item?._id}
                image={item?.image}
                title={item?.title}
                id={item?._id}
                description={item?.description.replace(/<[^>]+>/g, "")}
                category={item?.category || "General"}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-center">
            No blogs found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
