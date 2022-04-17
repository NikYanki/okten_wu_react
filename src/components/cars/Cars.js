import React from 'react';
import {useState, useEffect} from "react"

import {carsService} from '../../services';
import {Car} from "../";

export const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars(data))
    },[])
    useEffect(()=>{
        if(newCar){
            setCars([...cars,newCar])
        }
    },[newCar])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    )
};
