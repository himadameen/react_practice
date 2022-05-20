import React from 'react';
import withFilter from './withFilter';

const city_list = ['Delhi', 'LKO', 'Bhopal', 'Patna', 'Chhastisgarh', 'Jammu', 'Chennai', 'Mumbai']

const HOC_City = (props) => {
    return(
        <>
        {props.list && props.list.map((item) => (
            <div>{item}</div>
        ))}
        </>
    )
}

export default withFilter(HOC_City, city_list);
