import React from 'react';
import {useState, useEffect} from "react"

import {carsService} from '../../services';
import {Car} from "../";

export const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars(data))
    },[])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};
