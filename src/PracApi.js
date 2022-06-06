import React, { useEffect, useState } from "react";
import axios from "axios";

const PracApi = () => {


    const [data , setData] = useState([]); 
    const apiDis = async () => {
        const fda = await fetch("https://dog.ceo/api/breeds/list/all")
        // const fda = await fetch("https://api.publicapis.org/entries");
        const response = await fda.json();
        // console.log([response.message.bulldog]);
        setData([response]);
        console.log([response]);
        console.log(data);
        // console.log(data);
    }


    useEffect( () => {
        apiDis();
    }, [])

    // Object.keys(data[0].message);
    var arr = Object.keys(data);
    
    

    return(
        
        <>
        <h1>THE API CALLS</h1>
            {data && ((item , index) => (
                <div key={arr}>{item}</div>
             ))}
        </>
    )
}

export default PracApi;















// practice:::::

    // const data = [
    //     { name: "thing two", id: 1 ,  list : [ 'abc' , 'xyz'] },
    //     { name: "thing one", id: 2,  list : [ 'abc' , 'xyz']},
    //     { name: "thing Three", id: 3,  list : [ 'abc' , 'xyz']}
    // ]
    


// api through promise:::::

    // const apiDis = () => {
    //     fetch("https://dog.ceo/api/breeds/list/all")
    //     .then(data => {
    //            return data.json(); 
    //     })
    //     .then(response => {
    //         console.log(response);
    //         setData(response);
    //         console.log(response.message)
    //         setData(response.message.bulldog)
    //     })
    // }