import React  from 'react'
import Navbar from './Navbar/Navbar'
// import FormValidation from './FormValidation/FormValidation'
import RegistrationForm from './RegistrationForm/RegistrationForm'
// import Signup from './CompleteLoginForm/Signup'


    class App extends React.Component {
  render() {
    return (
        <div>
              <Navbar />
              <h1 className='text-primary'><i>Registration Form</i></h1>
              {/* <FormValidation /> */}
              <RegistrationForm />
              {/* <Signup /> */}
        </div>
      
    )
  }
}

 export default App