import {useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom'

import {PostsService} from '../../services'
import {SinglePost} from '../../components'

export const SinglePostPage = () => {
    const {state}=useLocation()
    const {id}=useParams()
    const [singlePost, setSinglePost] = useState(state)
    useEffect(()=>{
        !state? PostsService.getById(id).then(({data})=>setSinglePost(data)):setSinglePost(state)
    },[id, state])
    return (
        <div>
            {singlePost && <SinglePost key={singlePost.id} singlePost={singlePost}/>}
        </div>
    );
};
