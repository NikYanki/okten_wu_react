import {AxiosService} from "./Axios-service"
import {urls} from "../configs"

export const PostsService = {
    getAll: ()=>AxiosService.get(urls.posts),
    getById: (id)=>AxiosService.get(`${urls.posts}/${id}`)
}