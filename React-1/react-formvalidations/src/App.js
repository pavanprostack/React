import React  from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import FormValidation from './FormValidation/FormValidation'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import Signup from './CompleteLoginForm/Signup'
import Validate from './cmpltFormValidations/validate'


    class App extends React.Component {
  render() {
    return <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/validation1' element={<FormValidation/>} />
        <Route path='/validation2' element={<RegistrationForm/>} />
        <Route path='/validation3' element={<Signup/>} />
        <Route path='/validation4' element={<Validate/>} />
      </Routes>
    </Router>
    </>
  }
}

 export default App