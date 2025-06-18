"use client";
import { useGetBlogByIdQuery } from "@/app/redux/api";
import Loader from "@/components/Loader";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BlogDetailPage = ({ params }) => {
  const { id } = useParams();
  const { data: blog, isLoading: isBlogFetching } = useGetBlogByIdQuery(id, {
    skip: !id,
  });

  if (isBlogFetching) return <Loader />;
  if (!blog) return <div className="text-center py-20 text-gray-200">Blog not found</div>;

  // Function to safely render HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/blogs">
            <Button
              variant="outline"
              className="text-white cursor-pointer bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors"
            >
              ← Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Blog Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-300 bg-gray-700 rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
            {blog.title}
          </h1>
          
          <div className="flex items-center space-x-4 mt-6">
            <Image
              src={blog.authorImg}
              alt={blog.author}
              width={48}
              height={48}
              className="rounded-full border border-gray-700"
            />
            <div>
              <p className="font-medium text-gray-200">{blog.author}</p>
              <p className="text-sm text-gray-400">
                {format(new Date(blog.createdAt), "MMMM d, yyyy")}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert max-w-none">
          <div
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={createMarkup(blog.description)}
          />
        </article>

        {/* Divider */}
        <div className="my-12 border-t border-gray-700"></div>

        {/* Author Bio */}
        <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <Image
              src={blog.authorImg}
              alt={blog.author}
              width={64}
              height={64}
              className="rounded-full border border-gray-700"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-200">
                About {blog.author}
              </h3>
              <p className="text-gray-400 mt-1">
                {blog.author} writes about {blog.category} and other topics to
                help entrepreneurs and creators succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;