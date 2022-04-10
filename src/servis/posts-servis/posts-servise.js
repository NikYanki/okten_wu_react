import {config} from '../../configs'

export const PostsServise ={
    getAllPosts: ()=>fetch(config.apiURL+'posts').then(value => value.json())
}