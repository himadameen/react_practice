import React, { useState } from 'react';
import BollywoodChild from './BollywoodChild';
import './css/myStyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const Bollywood = () => {
    const [status, setStatus] = useState(false);
    const [location, setLocation] = useState('');
    const [countrylist, setCountryList] = useState(['India', 'UK', 'USA', 'Russia', 'South Africa', 'Mexico'])
    
    // const showFn = () => {
    //     setStatus(true);
    // }

    // const hideFn = () => {
    //     setStatus(false);
    // }

    const showhide = () => {
        setStatus(!status);
    }


    const displayNorth = () => {
        setLocation('north_hemisphere');
    }
    const displaySouth = () => {
        setLocation('south_hemisphere');
    }

    return(
        <>
            <div>Bollywood</div>
            <BollywoodChild temp="Runway 34"/>

            <br></br>
            <div>------------------------</div>
            <Button variant="secondary" onClick={showhide}>Show /Hide</Button>
            {/* <button className="btn btn-primary" onClick={showhide}>Show /Hide</button> */}
            {/* <button onClick={showFn}>Show</button>
            <button onClick={hideFn}>Hide</button> */}

            {
                status && <div>Div to be shown...</div>
            }


            <br></br>
            <div>------------------------</div>
            <button className="btn btn-primary btn-sm" onClick={displayNorth}>India</button>
            <button className="btn btn-primary btn-sm" onClick={displayNorth}>USA</button>
            <button className="btn btn-primary btn-sm" onClick={displayNorth}>UK</button>
            <button className="btn btn-primary btn-sm" onClick={displayNorth}>Russia</button>
            <button className="btn btn-primary btn-sm" onClick={displaySouth}>Australia</button>
            <button className="btn btn-primary btn-sm" onClick={displaySouth}>New Zealnad</button>
            <button className="btn btn-primary btn-sm" onClick={displaySouth}>South Africa</button>
            <button className="btn btn-primary btn-sm" onClick={displaySouth}>Mexico</button>
            <br></br>
            Hemishphere - 
            {
                (location !== '') && (location === 'north_hemisphere' ? <span>North</span> : <span>South</span>)
            }

            <br></br>
            <div>------------------------</div>
            <br></br>
            <ul>
            {
                // <ul>
                // for(i=0) {
                //     <li>{country name}</li>
                // }
                // array.map
                // array.forEach
                // for in
                
                countrylist && countrylist.map((item, index) => {
                    return (
                        <li key={item + index}>{item}</li>
                    )
                })
            }
            </ul>
        </>
    )
}


export default Bollywood;


// Hooks - useState (State) - 16.8

// if - &&
// if else - ? :


// List
// array - 
// <ul>
//     <li></li>
//     <li></li>
//     <li></li>

// </ul>