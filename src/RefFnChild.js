import React, {useRef, forwardRef} from 'react';

const RefFnChild = (props, ref) => {
    
        return(
            <>  
            <br></br>
            
                <h2>Login Form - Function</h2>
                <div ref={ref}></div>
                
            </>
        )
}

export default forwardRef(RefFnChild);

