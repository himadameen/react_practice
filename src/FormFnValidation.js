import React, { useEffect, useState } from 'react';

const FormFnValidation = () => {
    const [formStatus, setFormStatus] = useState(false);
    const initialValues = {username: '', email: '', password: ''};
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        console.log('event', event.target.value, event.target.name);
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FormData Submitted...', formData);
        const errorRet = validateForm(formData);
        setFormErrors(errorRet);
        if(Object.keys(errorRet).length === 0) {
            setFormStatus(true);
            console.log('--------------hahah------------------')
            //api call - formData
            setFormData(initialValues);
        }
    }

    const validateForm = (form_Data) => {
        let error = {};
        if(!form_Data.username) {   //username is blank
            error.username = 'Please, enter username...'
        }
        if(!form_Data.email) {   //email is blank
            error.email = 'Please, enter email...'
        }
        if(!form_Data.password) {   //password is blank
            error.password = 'Please, enter password...'
        }
        if(!form_Data.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {   //password is blank
            error.email = 'Please type valid email format ...'
        }
        if(form_Data.password.length < 10) {   //password is blank
            error.password = 'Please enter 10 characters  ...'
        }
        if(!form_Data.username.match(/[A-Za-z]/) ) {   //password is blank
            error.username = 'Please enter non digit charatcters  ...'
        }
        return error;
    };

    
    return(
        <>
            <h2>Registration Form</h2>
                <br></br>
                <form>
                    Name: 
                    <input type="text" name="username" required onChange={handleChange} value={formData.username} />
                    <div className='text-danger'>{formErrors.username}</div>
                    <br></br>
                    Email: 
                    <input type="email" name="email" onChange={handleChange} value={formData.email} />
                    <div className='text-danger'>{formErrors.email}</div>
                    <br></br>
                    Password: 
                    <input type="password" name="password" onChange={handleChange} value={formData.password} />
                    <div className='text-danger'>{formErrors.password}</div>
                    <br></br>
                    <button type="submit" onClick={handleSubmit}>Register</button>
                </form>
                <br></br>
                {formStatus && <div>Form Successfully Submitted...</div>}
                <br></br>
        </>
    )
}

export default FormFnValidation;


// Formic library - form handling