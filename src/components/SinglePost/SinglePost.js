import React from 'react';

export const SinglePost = ({singlePost}) => {
    const {id, title, body}=singlePost
    return (
        <div>
            <h6>{id}</h6>
            <h6>{title}</h6>
            <h6>{body}</h6>
        </div>
    );
};
