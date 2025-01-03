import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs}) => {
  return (
    <div className='blog-List absolute mt-10'>
      {blogs.map((blog) =>(
        <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h1 className='text-xl' >{ blog.title }</h1>
            <p>Written by { blog.author }</p>
            </Link>
        </div> 
      ))}
    </div>
  )
}

export default BlogList
