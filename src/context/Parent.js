import React, { createContext, useState } from 'react';
import ChildA from './ChildA';

const NameContext = createContext();

const Parent = () => {
    const [name, setName] = useState('Mr. ABC');
    const [count, setCount] = useState(0);
    console.log('api key - ', process.env.REACT_API_GITHUB_API_KEY);
    
    return(
        <>  
            Parent Component
            <div>---------------------</div>
            <br></br>
            {process.env.REACT_API_GITHUB_API_KEY}

            <div>---------------------</div>
            {/* https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png */}
            

            <NameContext.Provider value = {{name, setName, count, setCount}}>
                <ChildA />
            </NameContext.Provider>
        </>
    )
}

export default Parent;
export {NameContext};

