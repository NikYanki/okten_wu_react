import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from '../'

export const Post = ({post}) => {
    const {id, title, body}=post
    return (
        <div>
            {id}-{title}<Button to={`${id}`} state={post}>get Details</Button>
        </div>
    );
};
