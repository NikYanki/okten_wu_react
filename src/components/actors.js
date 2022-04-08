import React from 'react';

const Actors = (props) => {
    const {name, surname} = props;
    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
        </div>
    );
};

export default Actors;