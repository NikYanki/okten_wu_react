import {AxiosService} from "./Axios-service"
import {urls} from "../configs"

export const UsersService = {
    getAll: ()=>AxiosService.get(urls.users),
    getById: (id)=>AxiosService.get(`${urls.users}/${id}`)
}