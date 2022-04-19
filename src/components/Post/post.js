import React from 'react';
import {Link} from 'react-router-dom'

export const Post = ({post}) => {
    const {id, title, body}=post
    return (
        <div>
            {id}-{title}<Link to={`${id}`} state={post}>get Details</Link>
        </div>
    );
};
