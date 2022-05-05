import React, {Fragment} from 'react';

class CricketChild extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render () {
        const {count_temp, name_temp, location_temp} = this.props;
        return(
            <Fragment>
                <div>Child comp...</div>
                <div>Child comp...</div>
                <div>Count - {count_temp}</div>
                <div>Name - {this.props.name_temp}</div>
                <div>Location - {this.props.location_temp}</div>
            </Fragment>
        )
    }
}

export default CricketChild;