import React from 'react'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {                     // Complete registration form.
      userName: "",                    // using (name) Attribute we can validate form.if we use (name) attribute we dont want to create no.of methods
      email: "",                       // we should give name = that respected property name as value.
      password: "",
      mobile: "",
      gender: ""                       // for Radio buttons we should give name = property Name & value = male or female or anything.
    }
  }
  updateHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return <div className="container mt-5">
      <pre>{JSON.stringify(this.state)}</pre>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-success">
              <h3> Signup form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                  <input type="text" className='form-control' onChange={this.updateHandler} name="userName" placeholder='User Name' />
                </div>
                <div className='form-group'>
                  <input type="email" className='form-control' onChange={this.updateHandler} name="email" placeholder='Email' />
                </div>
                <div className='form-group'>
                  <input type="password" className='form-control' onChange={this.updateHandler} name="password" placeholder='Password' />
                </div>
                <div className='form-group'>
                  <input type="number" className='form-control' onChange={this.updateHandler} name="mobile" placeholder='Mobile' />
                </div>
                <div className='form-group'>
                  <label >Gender :</label>&nbsp;&nbsp;
                  <input type="radio" name="gender" onChange={this.updateHandler} value="Male" className='mx-2' />Male
                  <input type="radio" name='gender' onChange={this.updateHandler} value="Female" className='mx-2' />Female
                </div>

                <input type="submit" value="Signup" className="btn btn-danger" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default Signup