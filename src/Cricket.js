import React, {Component} from 'react';
import CricketChild from './CricketChild';


class Cricket extends Component {
    render() {
        return(
            <>
                <div>
                    I am at NS.  
                </div>
                <div>
                    abcd
                </div>
                <CricketChild />
            </>
        )
    }
}

export default Cricket;




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





