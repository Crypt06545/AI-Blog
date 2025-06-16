"use client";
import { useUser } from "@clerk/nextjs";
import { useGetBlogsByAuthorQuery } from "@/app/redux/api";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { format } from "date-fns";
import Loader from "@/components/Loader";

export default function MyBlogPage() {
  const { user, isLoaded } = useUser();

  const {
    data: blogs,
    isLoading,
    error,
  } = useGetBlogsByAuthorQuery(user?.fullName, {
    skip: !isLoaded || !user?.fullName,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => (
          <img
            src={row.original.image}
            alt="blog"
            className="w-16 h-16 object-cover rounded-md"
            onError={(e) => (e.target.style.display = "none")}
          />
        ),
      },
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => (
          <span className="font-semibold text-gray-800">
            {row.original.title}
          </span>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Posted Date",
        cell: ({ row }) => (
          <span>{format(new Date(row.original.createdAt), "PPP")}</span>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleUpdate(row.original)}
            >
              Update
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleDelete(row.original._id)}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: blogs || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleUpdate = (blog) => {
    console.log("Update blog:", blog);
    // Implement update logic
  };

  const handleDelete = (id) => {
    console.log("Delete blog ID:", id);
    // Implement delete logic
  };

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-600">Error fetching blogs.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs by {user?.fullName}</h1>
      {blogs?.length === 0 ? (
        <p className="text-gray-500">No blogs found for this author.</p>
      ) : (
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
