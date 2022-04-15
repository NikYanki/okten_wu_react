import {axiosService} from "./axios-service";
import {urls} from "../configs/urls";

export const carsService = {
    getAll: ()=>axiosService.get(urls.cars),//витягнення
    getById: (id)=>axiosService.get(`${urls.cars}/${id}`),//витягнення
    create: (car)=>axiosService.post(urls.cars, car),//створення
    updateById: (newCar, id)=>axiosService.put(`${urls.cars}/${id}`, newCar),//оновлення
    deleteById: (id)=>axiosService.delete(`${urls.cars}/${id}`)//видалення
}