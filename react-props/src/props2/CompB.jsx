/*

// class to class component.


import React from 'react'

class CompB extends React.Component{        // --------> for class declare props in peranthasis is not mandatory.
    render(){
        return <div>
            <h1>Component B</h1>
            <h4>{JSON.stringify(this.props)}</h4>

        </div>
    }
}
export default CompB     */


// class to function component.


import React from 'react'

let CompB = (props)=>{               // --------> for function we need to declare props in peranthasis.
    return <div>
        <h1>Component B</h1>
        <h4>{JSON.stringify(props)}</h4>
        <h3>College={props.collegeName}</h3>
        <h2>stdMarks={props.empDetails.marks}</h2>
    </div>

}
export default CompB 