import {useState, useEffect} from 'react';

import {PostsServise} from '../../servis';
import {Post} from '../';

 export const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        PostsServise.getAllPosts().then(posts=>setPosts(posts));
    },[]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};
