import React from 'react';



export const Car = ({car}) => {
    const {model, price, year}=car
    return (
        <div>
            {model}--{price}--{year}
        </div>
    );
};
