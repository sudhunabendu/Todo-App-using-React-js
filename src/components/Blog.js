import React,{useState} from 'react';
import {blogData} from '../data';

const Blog = () => {
  const [blogs, setBlogs] = useState(blogData)


  const trancateString = (str, num)=>{
    if(str.length > num){
      return str.slice(0,num) + "..."
    }else{
      return str
    }
  } 

  return (
    <div>
      <div className='text-center'>
        <h1>Blogs</h1>
      </div>
      <article>
        <p className='container' style={{backgroundColor:'lightblue'}}>
        {blogs.map((data)=>{
          const {id,title,body} = data
          return(
            <article key={id}>
              <h1>{title}</h1>
              <p>{trancateString(body, 400)}</p>
            </article>
          )
        })}
        </p>
      </article>
    </div>
  )
}

export default Blog