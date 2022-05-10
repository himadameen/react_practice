import React, { useState } from "react";

const EMI_Rate = (props) => {
   
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <h4>Enter Rate</h4>
                    <input type="number" value={props.rate} onChange={props.fn_rate} />
                </div>
            </div>

           
        </>
    )
}

export default EMI_Rate;