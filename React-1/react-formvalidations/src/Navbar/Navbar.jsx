import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return (
        <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/" className='navbar-brand'>Form Validations</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-list'><Link to="/validation1" className='nav-link'>RegistrationForm</Link></li>
            <li className='nav-list'><Link to="/validation2" className='nav-link'>FormValidation</Link></li>
            <li className='nav-list'><Link to="/validation3" className='nav-link'>SignUp</Link></li>
            <li className='nav-list'><Link to="/validation4" className='nav-link'>CompleteValidation</Link></li>
          </ul>
        </div>
      </nav>
        </div>
      
    )
  }
}

 export default Navbar