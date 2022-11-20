import React from 'react'

class FormValidation extends React.Component{
    state = {
       email:"",
       password:""
    }
    emailHandler= (event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler= (event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
    }
    render(){
        return (
            <div className="container mt-5">
                 <pre>{JSON.stringify(this.state)}</pre>
                <div className="row"> 
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header bg-success">
                                <h3>Login Details</h3>
                            </div>
                            <div className="card-body">
                            <form >
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={this.emailHandler}/>
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={this.passwordHandler}/>
                            </div>
                            <input type="button" value="Login" className='btn btn-primary' onClick={this.submitHandler}  />
                        </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FormValidation