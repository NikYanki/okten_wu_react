import React from 'react';
import {carsService} from "../../services"


export const Car = ({car, setCarForUpdate}) => {
    const {model, price, year, id}=car
    const deleteCar = async ()=>{
await carsService.deleteById(id)
    }
    return (
        <div>
            {model}--{price}--{year}
            <button onClick={()=>{deleteCar()}}>delete</button>
            <button onClick={()=>{setCarForUpdate(car)}}>update</button>
        </div>
    );
};
