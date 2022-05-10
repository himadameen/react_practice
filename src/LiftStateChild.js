import React from "react";

const LiftStateChild = (props) => {
    const {country, liftFn, handleChange} = props;
    return(
        <>
            <div className="row bg-danger bg-opacity-50">
                <div className="col-12">
                    <h3>Country Name - {props.country}</h3>
                    <br></br><br></br>
                    <button onClick={() => props.liftFn('India')}>India</button>
                    <button onClick={() => props.liftFn('Russia')}>Russia</button>
                    <button onClick={() => props.liftFn('USA')}>USA</button>
                    <button onClick={() => props.liftFn('UK')}>UK</button>
                    <br></br><br></br>
                    <input type="text" onChange={props.handleChange}/>
                    <br></br><br></br>
                    
                </div>
            </div>
        </>
    )
}

export default LiftStateChild;


// Lifting State Up