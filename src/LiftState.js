import React, { useState } from "react";
import LiftStateChild from './LiftStateChild';

const LiftState = () => {
    const [country, setCountry] = useState('India');

    const updateCountry = (data) => {
        console.log('parent component methods clicked....', data);
        setCountry(data);
    }
    return(
        <>
            <div className="row bg-danger bg-opacity-50">
                <div className="col-12">
                    Lift State 
                </div>
            </div>

            <div className="row bg-warning bg-opacity-50">
                <div className="col-12">
                    <LiftStateChild country={country} liftFn={updateCountry}/>
                </div>
            </div>
            
        </>
    )
}

export default LiftState;