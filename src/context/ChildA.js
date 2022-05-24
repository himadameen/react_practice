import React from 'react';
import ChildB from './ChildB';

const ChildA = () => {
    return(
        <>
            Child A Component
            <div>---------------------</div>
            <ChildB />
        </>
    )
}

export default ChildA;