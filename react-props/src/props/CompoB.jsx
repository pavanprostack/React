//import React from 'react'

// function to function components.


let CompoB =(props)=>{           // --------> for function we need to declare props in peranthasis.
    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h3>eName={props.eDetails.name}</h3>
        <h3>empId={props.eDetails.id}</h3>
        <h4>{props.arrElements[2]}</h4>
    </div>
}
export default CompoB  

/*

// function to class Components.

import React from 'react'

class CompoB extends React.Component{
    render(){                        // --------> for class declare props in peranthasis is not mandatory.
        return <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>eName={this.props.eDetails.name}</h4>
            <h3>{this.props.arrElements[2]}</h3>

        </div>
    }
}
export default CompoB          */