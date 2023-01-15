import React from 'react';
import './Posts.css';

function Post({ username, caption, imageurl}) {
    return (
        <div className='post'>
            <div className='post__header'>
                <img className='post_avatar' alt="Priyanka" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png" />
                </div>
            <h3>{username}</h3>
            <img className="post_image" src={imageurl} alt="Acheivement images" />
            <h4 className='post_text'><strong>{username}</strong> {caption} </h4>

        </div>
    )
}

export default Post