import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (  
    <div className='mt-[50px] w-11/12 max-w-[670px] justify-center items-center mx-auto tracking-wide text-[14px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-[1.1rem] hover:underline'>{post.title}</span>
      </NavLink>
      <p className='mt-[0.5rem]'>
        By
        <span className='italic '>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-bold underline'>{post.category}</span>
        </NavLink>
      </p>
      <p className='mb-[0.8rem]'> Posted on {post.date} </p>
      <p className=' tracking-wider font-normal'> {post.content}</p>
      <div className='mt-[0.9rem] text-[0.85rem] flex gap-2 underline text-blue-700'>
        {post.tags.map( (tag, index) => (
            <NavLink  key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
