import { render } from '@testing-library/react';
import React from 'react';

class ClassComp extends React.Component {
    constructor() {
        super();
        console.log('constructor------------------')
        this.state = {
            count:0 , 
            show: false
        }
    }
    updateCount = () => {
        console.log('-----------update-----------------')
        this.setState({
            count: this.state.count + 1
        })
    }

    showText = () => {
        this.setState({
            show: true
        })
    }

    
    componentDidMount () {
        console.log('my tkt booked for component did mount');
        //var ret - setInterval

        //api call
        //update state varible

        // fetch('url') - json format for rest API

    }
    componentDidUpdate() {
        console.log('my tkt booked for component did update');
    }
    

    componentWillUnmount() {
        // clearInterval(ret)
        //alert('aiuewf');
        console.log('------------unmount---------------');
    }


    
    render() {
        console.log('------------------render-----------------');
        return(
            <>
                <h1>test of Class Component - Lifecycle Methods</h1>
                Count = {this.state.count}
                <button onClick={this.updateCount}>Update</button>
                <br></br>
                <p>-------------------------------------</p>
                <button id="click" onClick={this.showText}>click me</button>
                {this.state.show && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy</p>}
                <p>-------------------------------------</p>
                




                {/* //loader at begining
                //actual data */}
            </>
        )
    }
}

export default ClassComp;




// UNSAFE_componentWillMount
    // UNSAFE_componentWillReceiveProps
    // UNSAFE_componentWillUpdate



// LifeCycle Methods in Class Component


//     phase 1 - mounting
// *****constructor - all initializations
// getDerivedStateFromProps - inclusion of props variables
// *****render - jsx handling
// *****componentDidMount - just after first dom creation


// custom fn triggered - state got updated, props updation


//     phase 2 - re-rendering
//     getDerivedStateFromProps
//     shouldComponentUpdate - comparing virtual dom
//     *****render - jsx
//     getSnapshotbeforeUpdate
//     *****componentDidUpdate - after every re-rendering


//     phase 3 - unmounting
//     *****componentWillUnmount - just before component unmounting


// constructor
// render
// componentDidMount
// render
// componentDidUpdate
// render
// componentDidUpdate
// render
// componentDidUpdate
// render
// componentDidUpdate
// componentWillUnmount
