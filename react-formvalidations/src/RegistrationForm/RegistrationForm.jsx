import React from 'react'

class RegistrationForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        areaCode: "",
        phoneNumber: "",
        subject: "",
        AreYouAnExistingCustomer: ""
    }
    eventHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event)=>{
      event.preventDefault();
      console.log(this.state)
    }
    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-header bg-warning text-center" >
                        <h2>Event Registration Form</h2>
                    </div>
                    <div className="card-body bg-info">
                        <form onSubmit={this.submitHandler}>
                            <div className="row">
                                <div className="col-2">
                                    <label><b>Name</b></label>
                                </div>
                                <div className="col-5 form-group">
                                    <input type="text" placeholder='FirstName' onChange={this.eventHandler} name="firstName" className='form-control' />
                                </div>
                                <div className="col-5 form-group">
                                    <input type="text" placeholder='LastName' onChange={this.eventHandler} name="lastName" className='form-control' />
                                </div>
                                <div className="col-2">
                                    <label><b>Company</b></label>
                                </div>
                                <div className="col-10 form-group">
                                    <input type="text" className='form-control' onChange={this.eventHandler} name="company" />
                                </div>
                                <div className="col-2">
                                    <label><b>Email</b></label>
                                </div>
                                <div className="col-10 form-group">
                                    <input type="text" className='form-control' name='email' onChange={this.eventHandler} />
                                </div>
                                <div className="col-2">
                                    <label><b>Phone</b></label>
                                </div>
                                <div className="col-3 form-group">
                                    <input type="text" className='form-control' onChange={this.eventHandler} name='areaCode' placeholder='Areacode' />
                                </div>
                                <div className="col-7 form-group">
                                    <input type="text" className='form-control' onChange={this.eventHandler} name='phoneNumber' placeholder='Phone Number' />
                                </div>
                                <div className="col-2">
                                    <label><b>Subject</b></label>
                                </div>
                                <div className="col-10 form-group">
                                    <select className='form-control' onChange={this.eventHandler} name="subject">
                                        <option>Choose Option</option>
                                        <option>Software Developer</option>
                                        <option>Software Test Engineer</option>
                                        <option>Cloud Developer</option>
                                        <option>FrontEnd Developer</option>
                                    </select>
                                </div><br /><br /><br /><br />
                                <div className='col-12'>
                                    <h6><strong>Are you an existing customer? </strong></h6>
                                    <input type="radio" className='mx-0' onChange={this.eventHandler} name="AreYouAnExistingCustomer" value='Yes' /> Yes  &nbsp;
                                    <input type="radio" className='mx-0' onChange={this.eventHandler} name="AreYouAnExistingCustomer" value='No' /> No
                                </div><br /><br /><br /><br />
                                <div className="col-4 form-group">
                                    <input type="Submit" value="Registration" className='form-control btn btn-danger' />
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    }
}
export default RegistrationForm