'use client'
import { useGetBlogsQuery } from '@/app/redux/api'
import React from 'react'

const BlogPage = () => {
  const {isLoading,isError,isSuccess,data,error} = useGetBlogsQuery()
  console.log(isLoading,isError,isSuccess,data,error);
  
  return (
    <div className='min-h-screen'>
      This is blog page
    </div>
  )
}

export default BlogPage
