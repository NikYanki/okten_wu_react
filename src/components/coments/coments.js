import {useState, useEffect} from 'react';

import {ComentsServise} from'../../servis';
import {Coment} from'../';

export const Coments = () => {
    const [coments, setComments] = useState([]);
    useEffect(()=>{
        ComentsServise.getAllComents().then(coments=>setComments(coments))
    },[]);

    return (
        <div>
            {coments.map(coment=><Coment key={coment.id} coment={coment}/>)}
        </div>
    );
};
