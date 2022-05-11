import React, {useRef} from 'react';
import RefFnChild from './RefFnChild';

const RefFn = () => {
    
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const outRef1 = useRef();
    const childRef = useRef();
    
    const handleSubmit = () => {
        console.log('handle submit trigeered...');
        console.log(inputRef1.current.value);
        console.log(inputRef2.current.value);
        outRef1.current.innerHTML = inputRef1.current.value + inputRef2.current.value;
        childRef.current.innerHTML = inputRef1.current.value + inputRef2.current.value;
    }

        return(
            <>  
            <br></br>
            
                <h2>Login Form - Function</h2>
                <br></br>
                <input type="text" ref={inputRef1}/>
                <br></br>
                <input type="password" ref={inputRef2}/>
                <br></br>
                <button onClick={handleSubmit}>Login</button>
                <br></br>

                <div ref={outRef1}></div>
                <br></br><br></br>

                <RefFnChild name="Ref fn child exmaple" ref={childRef} />
                <br></br><br></br>
            </>
        )
}

export default RefFn;