import React, { useState } from 'react';
import "./Post.css"

const Post = ({ title, author, content }) => {

    const [showMore, setShowMore] = useState(false);

    const toggleMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='post-container'>
            <p>Title : {title}</p>
            <p>Author : {author}</p>
            <p className='post-content'>Content : {showMore ? content : `${content.slice(0, 100)}`}
                <span>
                    {content.length > 100 && (
                        <>
                            {!showMore && '...'}
                            <a className='button-blog' onClick={toggleMore} style={{ marginLeft: "5px", cursor: "pointer" }}>
                                {!showMore && "Read more"}
                            </a>
                        </>
                    )}
                </span>
            </p>
            
            
        </div>
    )
}

export default Post
