import {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom'

import {PostsService} from '../../services';
import {Post} from '../../components'

export const PostPage = () => {
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        PostsService.getAll().then(({data})=>setPosts(data))
    },[])
    return (
        <div style={{display:"flex"}}>
            <div> {posts.map(post=><Post key={post.id} post={post}/>)}</div>
            <div>{<Outlet/>}</div>

        </div>
    );
};