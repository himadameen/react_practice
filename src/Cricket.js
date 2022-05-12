import React, {Component} from 'react';
import CricketChild from './CricketChild';
// import BollywoodChild from './BollywoodChild';

class Cricket extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            // count2: 0,
            // sum:0
        }
    }
    increment = () => {
        console.log('inside increment function...');
        // this.state = {
        //     count: this.state.count + 1
        // }
        //this.forceUpdate();
        console.log(this.state.count);
        this.setState({
            count: this.state.count + 1
        })
        // For state update dependant on other state
        // this.setState({
        //     count2: this.state.count2 + 1
        // })
        // this.setState((prevState) =>({
        //     sum: prevState.count + prevState.count2
        // }))
        console.log(this.state.count);//old value
        console.log('increment function over ...');
        //setState is an async method - it expects new state object as parameter, not function
    }
    render() {
        let name = 'abcdef'
        return(
            <>
                <div>
                    I am at NS.
                </div>
                <div>
                    abcd
                </div>
                <br></br>
                <div>
                    Count - {this.state.count}
                    <br></br>
                    <button onClick={this.increment}>Increase</button>
                </div>
                <br></br>
                <CricketChild count_temp={this.state.count} name_temp = {name} location_temp = "GGN" />
                {/* <BollywoodChild temp="liaugewf"/> */}
            </>
        )
    }
}

export default Cricket;




// state varible
// events
// constructor - super
// this keyword


//Fragment Requirement

// div span
// div > span

// <div>
//     <span>1</span>
//     <span>2</span>
//     <span>3</span>
//     <span>
//         <span>4</span>
//         <span>5</span>
//         <span>6</span>
//     </span>
// </div>



// let a = 1;
// console.log(a);

// setTimeout(function(){
//     a = a+1
// },0);

// console.log(a);


// ({ count }) => ({
//     count: count + 1
//   })