import React, { useContext } from "react";
import { DataAppContext } from './common/DataApp';

const ColorApp = () => {
    const dataAppTemp = useContext(DataAppContext);
    const colors = [
        {
            name: 'blue',
            label: 'Blue',
            color: '#78d6f5'
        },
        {
            name: 'green',
            label: 'Green',
            color: '#4df0a6'
        },
        {
            name: 'red',
            label: 'Red',
            color: '#fc805d'
        }
    ];
    return(
        <>

            {
                colors && colors.map((item, index) => (
                    <div key={item.name + index} className='tile' style={{'background': item.color}} onClick={()=>dataAppTemp.setBgColor(item.color) }>{item.label}</div>
                ))
            }
        </>
    )
}

export default ColorApp;