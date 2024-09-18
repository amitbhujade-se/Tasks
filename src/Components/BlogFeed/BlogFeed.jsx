import React from 'react'
import Post from './Post'

const BlogFeed = () => {

    const blogs = {
        title: "facebook",
        author: "rajat",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam in at neque consectetur odio laborum quaerat aspernatur modi aliquam amet expedita, nobis doloribus alias? Culpa, reprehenderit impedit. Saepe, quam."
    }

    return (
        <div style={{border: "5px double darkred", margin: "20px"}} className='blog-container'>
            <h1 style={{textAlign: "center"}}>Task no. 2</h1>
            <Post title={blogs.title} author={blogs.author} content={blogs.content}/>
        </div>
    )
}

export default BlogFeed
