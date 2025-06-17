import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/`,
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "blog",
    }),
    getBlogById: builder.query({
      query: (id) => `update?id=${id}`,
    }),
    addBlog: builder.mutation({
      query: (formdata) => ({
        url: "addblog",
        method: "POST",
        body: formdata,
      }),
      invalidatesTags: [{ type: "Blogs", id: "LIST" }],
    }),
    getBlogsByAuthor: builder.query({
      query: (author) => `myblog?author=${encodeURIComponent(author)}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Blogs", id: _id })),
              { type: "Blogs", id: "LIST" },
            ]
          : [{ type: "Blogs", id: "LIST" }],
    }),
    updateBlog: builder.mutation({
      query: ({ id, formdata }) => ({
        url: `update?id=${id}`,
        method: "PUT",
        body: formdata,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Blogs", id }],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `delete?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Blogs", id: "LIST" }],
    }),
    genAiContetn: builder.mutation({
      query: (prompt) => ({
        url: "generate-content",
        method: "POST",
        body: { prompt },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddBlogMutation,
  useGenAiContetnMutation,
  useGetBlogsByAuthorQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
