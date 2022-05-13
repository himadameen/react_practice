import React from 'react';
import withFilter from './withFilter';

const country_list = ['India', 'USA', 'Ukraine', 'Nepal', 'Sri Lanka', 'Pakistan', 'UK', 'Poland', 'UAE'];

class HOC_Country extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <>
            {this.props.list && this.props.list.map((item) => (
                <div>{item}</div>
            ))}
            </>
        )
    }
}

export default withFilter(HOC_Country, country_list);
