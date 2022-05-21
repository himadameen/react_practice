import { render } from '@testing-library/react';
import React from 'react';

class ClassComp extends React.Component {
    constructor() {
        super();
        this.state = {
            issuesList:[1,2,3,4,5],
            pageNum: 1,
            buttons: [1,2,3,4,5,6,7,8,9,10],
        }
    }

    callApi = (num) => {
        fetch(`https://api.github.com/repositories/1296269/issues?page=${num}&per_page=5`)
       .then(data => {
           return data.json();
       })
       .then(response => {
           console.log(response);
           //renderTable
           this.setState({
                ...this.state,
               issuesList:response
           })
       })
    }
   
    componentDidMount () {
        this.callApi(1);
       
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-API-KEY': process.env.REACT_API_GITHUB_API_KEY,
        //         'Access-Control-Allow-Headers': '*'
        //     }
        // }

        // fetch('https://api.github.com/repositories/1296269/issues?page=1&per_page=5', options)
        // .then(data => {
        //     return data.json();
        // })
        // .then(response => {
        //     console.log(response);
        // })
    }

    componentDidUpdate() {
        // console.log('state - ', this.state);
        //this.callApi();
    }
    

    componentWillUnmount() {

    }

    updatePageNum = (num) => {
        this.setState({
            ...this.state,
            pageNum: num
       })
       this.callApi(num);
    }

    
    render() {
        return(
            <>
                <h2>Issues List</h2>
                {
                    this.state.buttons && this.state.buttons.map((item) => (
                        <button className='btn btn-sm btn-primary' onClick={() => this.updatePageNum(item)}>{item}</button>
                    ))
                }
                <button className='btn btn-sm btn-primary'>Next</button>
                <table className='table table-striped table-responsive'>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.issuesList && this.state.issuesList.map((item) => (
                        <tr>
                            <td>{item.number}</td>
                            <td>{item.title}</td>
                            <td>{item.url }</td>
                            <td>{ item.state }</td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </>
        )
    }
}

export default ClassComp;



// let obj = {
//     name: 'aiwuegf',
//     age: 'aiwuegf'
// }


// <div>{obj}</div>

// Object.keys
// Object.values
// Object.entries

// <>obj.name</>
// <obj.age