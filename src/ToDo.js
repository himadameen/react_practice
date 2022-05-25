import React, { useEffect, useState, useContext } from 'react';
import { DataAppContext } from './common/DataApp';

const ToDo = () => {
    const [tempInput, setTempInput] = useState('');
    const [todolist, setTodolist] = useState([]);

    const loginDetails = useContext(DataAppContext);
    console.log(loginDetails);

    const handleChange = (event) => {
        console.log('user has typed - ', event.target.value);
        setTempInput(event.target.value);
    }
    const handleSubmit = () => {
        setTodolist([...todolist, tempInput]);
        setTempInput('');
    }

    useEffect(()=> {
        console.log(todolist);
    })

    return(
        <>  
        <div className='row bg-info bg-opacity-50'>
            <div className='col-9'>
                {loginDetails.isLoggedIn && <div>Hi {loginDetails.userName}</div>}
            </div>
            <div className='col-3'>
                {loginDetails.isLoggedIn ? 
                (<button onClick={() => loginDetails.setLogin(false)}>Logout</button>) :
                (<button onClick={() => loginDetails.setLogin(true)}>Login</button>)}
            </div>
        </div>
        <div>
            <input type="text" value={tempInput} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add</button>
            {todolist && todolist.map((item, index) => (
                <div key={item + index}>{item}</div>
            ))}
            </div>
        </>
    )
}

export default ToDo;