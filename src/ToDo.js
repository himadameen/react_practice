import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [tempInput, setTempInput] = useState('');
    const [todolist, setTodolist] = useState([]);

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
            <input type="text" value={tempInput} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add</button>
            {todolist && todolist.map((item, index) => (
                <div key={item + index}>{item}</div>
            ))}
        </>
    )
}

export default ToDo;