import React from 'react'
// import { useMemo } from 'react'
import { useState } from 'react'

const CounterEx = () => {

    let [counter, setCounter] = useState(0)
    let [number, setNumber] = useState(6)
    // const Factorial = fact(number)
    const Factorial = React.useMemo(()=>fact(number), [number])



    return <>
    <center>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>UseMemo Hook</h2>
                        </div>
                        <div className="card-body">
                            <p>Factorial : {Factorial}</p>
                            <p>Counter : {counter}</p>
                            <p>Number : {number}</p>
                            <button onClick={() => { setCounter(counter + 1) }}>Increment</button> <br /><br />
                            <button onClick={() => { setNumber(number + 1) }}>numbIncrement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </center>
    </>
}

const fact = (n) => {
    let answer = 1;
    for (let i = n; i >= 1; i--) {
        answer = answer * i;
    }
    console.log('factorial function calling');
    return answer
}

export default CounterEx
