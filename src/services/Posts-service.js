import {AxiosService} from "./Axios-service"
import {urls} from "../configs"

export const PostsService = {
    getAll: (page, _limit:2)=>AxiosService.get(urls.posts, {
        params:{
            _start:(page-1)*_limit,
            _limit
        }}),
    getById: (id)=>AxiosService.get(`${urls.posts}/${id}`)
}