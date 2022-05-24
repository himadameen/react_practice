import React from 'react';
import ChildC from './ChildC';
import { NameContext } from './Parent';

class ChildB extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <>
             ChildB Component
            <br></br>

            <NameContext.Consumer>
                {
                    (temp) => {
                        return(
                            <>
                                <div>Name in B - {temp.name}</div>
                            </>
                        )
                    }
                }
            </NameContext.Consumer>




            <div>---------------------</div>
            <ChildC/>
            </>
        )
    }
}

export default ChildB;