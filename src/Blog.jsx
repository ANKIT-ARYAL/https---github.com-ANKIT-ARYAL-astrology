import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Blog = () => {

  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  return (
    <div className='div-screen'>
      <div className='background-image'>
      <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKigeBs10bimUo-6jEH-ra2dAt3CDnX8Fyg&s'
        className='w-full h-auto object-cover'
        />
        <h1 className='heading absolute text-white'>Our Blogs</h1>
        {blogs && <BlogList blogs={blogs} />}
    </div>
    </div>
  )
}

export default Blog
