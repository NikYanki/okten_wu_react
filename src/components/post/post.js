import React from 'react';
import './post.css'

export const Post = ({post}) => {
    return (
        <div className={'post'}>
            <p>{post.title}</p>
            <hr/>
        </div>
    );
};
