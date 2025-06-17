'use client'
import { useSearchParams } from 'next/navigation';


const UpdateBlog = () => {

    const searchParams = useSearchParams();
    console.log(searchParams);

    const id = searchParams.get('id');
    console.log(id);

  return (
    <div>
      This is update Blog {id}
    </div>
  )
}

export default UpdateBlog;