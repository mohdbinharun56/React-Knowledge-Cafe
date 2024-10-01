import { useEffect } from "react";
import { useState } from "react";


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
        <div className="w-[845px] border-2">
            <h1>Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;