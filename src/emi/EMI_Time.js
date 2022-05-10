import React, { useState } from "react";

const EMI_Time = (props) => {
   
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <h4>Enter Time</h4>
                    <input type="number" value={props.time} onChange={props.fn_time} />
                </div>
            </div>

           
        </>
    )
}

export default EMI_Time;