import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogList = () => {
  const blogCategory = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <div className="min-h-[89vh] bg-gray-900">
      <div className="flex justify-center items-center">
        <Tabs className='p-4' defaultValue="account">
          <TabsList className="bg-gray-800 border border-gray-700 rounded-full flex justify-center gap-2 p-1">
            <TabsTrigger className='text-white cursor-pointer ' value="account">All</TabsTrigger>
            <TabsTrigger className='text-white cursor-pointer' value="password">Technology</TabsTrigger>
            <TabsTrigger className='text-white cursor-pointer' value="startup">Startup</TabsTrigger>
            <TabsTrigger className='text-white cursor-pointer' value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger className='text-white cursor-pointer' value="finance">Finance</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogList;
