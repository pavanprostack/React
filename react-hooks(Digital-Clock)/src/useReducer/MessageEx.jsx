import React, { useReducer } from 'react'


let initialState = {
    message: "Hello"
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GM':
            return { message: 'GoodMorning' }
        case 'GA':
            return { message: 'GoodAfterNoon' }
        case 'GN':
            return { message: 'GoodNight' }
        default:
            return state
    }
}

const MessageEx = () => {

    let [state, dispatch] = useReducer(reducer, initialState);

    return <>
        <div className="container">
            <div className="row">
                <div className="clo-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>{state.message}</h2>
                        </div>
                        <div className="card-body">
                            <button onClick={() => { dispatch({ type: "GM" }) }} className='btn btn-primary'>GM</button>
                            <button onClick={() => { dispatch({ type: "GA" }) }} className='btn btn-success'>GA</button>
                            <button onClick={() => { dispatch({ type: "GN" }) }} className='btn btn-danger'>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MessageEx