import Image from "next/image";
import React from "react";
import { blog_data } from "@/app/assets/assets";
const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black">
      <Image src={blog_data[0].image} alt="" width={400} height={400} />
    </div>
  );
};

export default BlogCard;
