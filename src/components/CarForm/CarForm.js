import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from 'react-hook-form'
import {useState, useEffect} from 'react'

import {CarValidators} from "../../validators";
import {carsService} from '../../services';

export const CarForm = ({setNewCar, carForUpdate}) => {

    //const [formError, setFormError] = useState({})

    // const {register, reset, handleSubmit, formState:{errors}} = useForm({
    //     resolver: joiResolver(CarValidators),
    //     mode: "onTouched"
    // })



    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(CarValidators),
        mode: "onTouched"
    });

    useEffect(()=>{
if (carForUpdate){
    const {model, price, year}= carForUpdate
    setValue('model', model);
    setValue('price', price);
    setValue('year', year);

}
    },[carForUpdate])

    const submit = async (car) => {
        try {
            const {data} = await carsService.create(car)//додаємо в базу
            setNewCar(data)
            reset()
        } catch (e) {
            //console.log(e.response.data)
            // setFormError(e.response.data)
            // console.log(formError)
        }

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text"{...register("model")}/></label></div>
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            {errors.model && <span>{errors.model.message}</span>}

            <div><label>Price:<input type="text"{...register("price", {valueAsNumber: true})}/></label></div>
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            {errors.price && <span>{errors.price.message}</span>}

                <div><label>Year:<input type="text"{...register("year", {valueAsNumber: true})}/></label></div>
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            {errors.year && <span>{errors.year.message}</span>}

                <button>Save</button>
                </form>
                );
            };
