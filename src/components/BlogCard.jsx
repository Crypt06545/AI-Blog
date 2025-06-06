import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const BlogCard = ({ image, title, description, category ,id}) => {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-gray-900/60 backdrop-blur-md shadow-lg hover:shadow-primary/30 transition duration-300 hover:scale-[1.01] cursor-pointer border border-gray-700">
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="w-full h-48 object-cover"
      />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-gray-700 text-emerald-300 text-xs font-semibold rounded-full">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-semibold text-gray-200 text-base">{title}</h5>
        <p className="text-sm text-gray-400">{description.slice(0, 80)}...</p>
        <div>
          <Button
            variant="outline"
            className="mt-4 text-white cursor-pointer bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors"
          >
            <Link href={`/blogs/${id}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
