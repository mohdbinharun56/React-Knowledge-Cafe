import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
   const [blogs,setBlogs] = useState([]);

   useEffect(()=>{
    fetch('../../../public/utilities/Blogs.json')
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        setBlogs(data);
    });
   },[])
   
    return (
        <div className="w-2/3 border-2">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;