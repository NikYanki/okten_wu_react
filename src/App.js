import {useState} from "react";

import {CarForm, Cars} from "./components"

function App() {
    const [newCar, setNewCar]=useState(null)
    const [carForUpdate, setCarforUpdate] = useState(null)
    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarforUpdate}/>
        </div>
    )
        ;
}

export default App;
