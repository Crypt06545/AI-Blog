import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blog_data } from "@/app/assets/assets";
import BlogCard from "./BlogCard";
const BlogList = () => {
  const blogCategory = [
    { path: "account", name: "All" },
    { path: "password", name: "Tech" },
    { path: "startup", name: "Startup" },
    { path: "lifestyle", name: "Life" },
    { path: "finance", name: "Finance" },
  ];

  return (
    <div className="min-h-[89vh] w-[] bg-gray-900">
      <div className="flex justify-center items-center p-2 sm:p-4">
        <Tabs defaultValue="account" className="w-full overflow-x-auto">
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
      <div className="w-full mt-4 px-6 md:px-16 lg:px-24 xl:px-32 grid md:grid-cols-4 gap-5">
        {blog_data.map((item, index) => {
          // console.log(item);
          return (
            <BlogCard
              key={index}
              image={item.image}
              title={item.title}
              id={item.id}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
