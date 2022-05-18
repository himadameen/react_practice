import React, { useState, useEffect } from 'react';

const GithubFn = () => {
    const [issuesList, setIssuesList]  = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [buttons, setButtons] = useState([1,2,3,4,5,6,7,8,9,10]);

    const callApi = () => {
        fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`)
       .then(data => {
           return data.json();
       })
       .then(response => {
           console.log(response);
           //renderTable
           setIssuesList(response);
       })
    }

    const updatePageNum = (num) => {
        setPageNum(num)
    }

    useEffect(() => {
        callApi();
    }, [])
    //componentDidMount - just one time trigger


    useEffect(() => {
        //callApi();
    })
    //componentDidMount and componentDidUpdate - trigger every time - re-render


    useEffect(() => {
        callApi();
    }, [pageNum])
    //trigger on every pageNum update


    useEffect(() => {
        return () => {
            console.log('-------------triggered on unmount------------')
        }
    }, [])
    //componentWillUnmount


    return(
        <>
        <h2>Issues List</h2>
                {
                    buttons && buttons.map((item) => (
                        <button className='btn btn-sm btn-primary' onClick={() => updatePageNum(item)}>{item}</button>
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
                    issuesList && issuesList.map((item) => (
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

export default GithubFn;