import React, { useEffect, useState, useContext } from 'react';
import { DataAppContext } from './common/DataApp';
import {nanoid} from 'nanoid';

const ToDo = () => {
    const [tempInput, setTempInput] = useState('');
    const [todolist, setTodolist] = useState([]);
    const [editId, setEditId] = useState('');
    const [editValue, setEditValue] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    const loginDetails = useContext(DataAppContext);
    console.log(loginDetails);

    const handleChange = (event) => {
        console.log('user has typed - ', event.target.value);
        setTempInput(event.target.value);
    }
    const handleSubmit = () => {
        let obj = {
            id: nanoid(),
            task: tempInput,
            status: false
        }
        setTodolist([...todolist, obj]);
        setTempInput('');
    }

    useEffect(()=> {
        console.log(todolist);
    })

    useEffect(() => {
        //callApi();
        console.log('useeffect of to do  got triggered...');
        loginDetails.setBgColor('#a3e7cb');
    })

    const editFn = (data) => {
        console.log('data', data);
        setEditId(data);
        setShowEdit(true);
    }

    const tempEditFn = (event) => {
        console.log(event.target.value);
        setEditValue(event.target.value);
    }

    const saveEditFn = () => {
        setShowEdit(false);
        let tempList = todolist.map((temp) => {
            if(temp.id === editId) {
                temp.task = editValue;
            }
            return temp;
        })
        //  console.log(tempList);
        setTodolist(tempList);
    }

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
        <div>------------------------------------------</div>
        <div>
            <input type="text" value={tempInput} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add</button>
        </div>
        <div>
            <div>------------------------------------------</div>
            {todolist && todolist.map((item, index) => (
                <div key={item.id + index}>
                    <span>{item.task}</span>
                    <button className="btn btn-secondary"  onClick={() => editFn(item.id)}>Edit</button>
                    <button className="btn btn-danger"  onClick={() => editFn(item.id)}>Delete</button>
                    <button className="btn btn-success" onClick={() => editFn(item.id)}>Done</button>
                </div>
            ))}
        </div>
        <div>------------------------------------------</div>
        {showEdit && (<>
            <input type="text" onChange={tempEditFn} value={editValue}/>
            <button onClick={saveEditFn}>Save Edited Data</button>
            </>)
        }
        <div>------------------------------------------</div>

        </>
    )
}

export default ToDo;