import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    // get all blogs
    getBlogs: builder.query({
      query: () => "blog",
    }),
    // post blog
    addBlog: builder.mutation({
      query: (formdata) => ({
        url: "addblog",
        method: "POST",
        body: formdata,
      }),
    }),
    //generate ai content
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

export const { useGetBlogsQuery, useAddBlogMutation, useGenAiContetnMutation } =
  blogsApi;
