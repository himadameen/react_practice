import React, { useEffect, useState } from 'react';

const FormFn = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formStatus, setFormStatus] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submit clicked...');
        console.log('FormData', username, email, password);
        setFormStatus(true);
        //api call
        setUsername('');
        setEmail('');
        setPassword('');
    }

    const input_username = (event) => {
        console.log('input username', event.target.value);
        setUsername(event.target.value);
    }
    const input_email = (event) => {
        console.log('input email', event.target.value);
        setEmail(event.target.value);
    }
    const input_password = (event) => {
        console.log('input password', event.target.value);
        setPassword(event.target.value);
    }

    useEffect(() => {
        setTimeout(() => {setFormStatus(false);}, 5000)
    }, [formStatus])

    return(
        <>
            <h2>Registration Form</h2>
                <br></br>
                <form>
                    Name: 
                    <input type="text" name="username" onChange={input_username} value={username} />
                    <br></br>
                    Email: 
                    <input type="email" name="email" onChange={input_email} value={email} />
                    <br></br>
                    Password: 
                    <input type="password" name="password" onChange={input_password} value={password} />
                    <br></br>
                    <button type="submit" onClick={handleSubmit}>Register</button>
                </form>
                <br></br>
                {formStatus && <div>Form Successfully Submitted...</div>}
                <br></br>
        </>
    )
}

export default FormFn;