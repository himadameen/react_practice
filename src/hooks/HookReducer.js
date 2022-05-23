import React, { useEffect, useReducer, useState } from 'react';

const HookReducer = () => {
    const initialValues = {
        numTransaction: 0,
        netBalance: 10000,
        showNetBalance: false
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'INCREMENTBYONE':
                return {
                    numTransaction: state.numTransaction + 1,
                    netBalance: state.netBalance,
                    showNetBalance: state.showNetBalance
                }
            case 'INCREMENTBY5K':
                return {
                    numTransaction: state.numTransaction + 1,
                    netBalance: state.netBalance + 5000,
                    showNetBalance: state.showNetBalance
                }
            case 'SHOWNETBALANCE':
                return {
                    numTransaction: state.numTransaction,
                    netBalance: state.netBalance,
                    showNetBalance: !state.showNetBalance
                }
            default:
                return state
            
        }
    }

    // const [show, setShow] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialValues);
    //state - global state var
    //dispatch - fn to update state
    //dispatch - will have one parameter to explain the action type
    //reducer - function to handle all type of actions and update state


    useEffect(() => {
        console.log('component re-triggered...', state)
    })


    return(
        <>
            <br></br>
            <button onClick={() => dispatch({type: 'INCREMENTBYONE'})}>Update Transaction Count</button>
            <br></br>
            <button onClick={() => dispatch({type: 'INCREMENTBY5K'})}>Increment Balance by 5000</button>
            <br></br>
            <button onClick={() => dispatch({type: 'SHOWNETBALANCE'})}>Show Balance</button>
            <br></br>
            <div>Balance - {state.numTransaction}</div>
            <div>Balance - {state.netBalance}</div>
            {state.showNetBalance && <div>Mission Successfull...</div>}
        </>
    )
}
export default HookReducer;