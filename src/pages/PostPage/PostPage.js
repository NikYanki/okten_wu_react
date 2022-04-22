import {useState, useEffect} from 'react';
import {Outlet, useSearchParams} from 'react-router-dom'

import {PostsService} from '../../services';
import {Post} from '../../components'

export const PostPage = () => {
    const [posts, setPosts]=useState([]);
    const [qery, setQery] = useSearchParams({page:'1'})
    useEffect(()=>{
        PostsService.getAll(qery.get('page'), 10).then(({data})=>setPosts(data))
    },[qery])
    const nextPage = () => {
      let page= qery.get('page')
        page= +page+1
        setQery({page: page.toString()})
    }
    const prevPage = () => {
        const qeryObj = Object.fromEntries(qery.entries());
        qeryObj.page--
        setQery(qeryObj)
    }
    return (
        <div style={{display:"flex"}}>

            <div>
                {posts.map(post=><Post key={post.id} post={post}/>)}
                <button onClick={()=>{nextPage()}}>Next</button>
                <button onClick={()=>{prevPage()}}>Prev Page</button>
            </div>
            <div>{<Outlet/>}</div>

        </div>
    );
};