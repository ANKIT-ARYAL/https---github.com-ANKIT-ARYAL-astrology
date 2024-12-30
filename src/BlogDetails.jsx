import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {

    const{id} = useParams();
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    
  return (
    <div className="blog-details">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {blog && (
            <article className='border-2 p-2 w-[70%] '>
                <h2 className='blog-title'>{blog.title}</h2>
                <div className='flex justify-between'>
                <p className='blog-text'>Written by { blog.author }</p>
                <button onClick={() => navigate(-1)}
                className='button'>Go Back</button>
                </div>
                <p className='blog-text'>{ blog.body }</p>
                
            </article>
          )}
          <img
          src='https://5.imimg.com/data5/SELLER/Default/2022/9/QL/WG/CQ/121039764/horoscope-astrology-services-500x500.png'
          className='h-auto w-[30%] object-cover p-5 border-2'
          />
    </div>
  )
}

export default BlogDetails
