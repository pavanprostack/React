import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="#" className='navbar-brand'>Navbar</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link to="/home" className='nav-link'>Home</Link></li>
                    <li className='nav-list'><Link to="/about" className='nav-link'>About</Link></li>
                    <li className='nav-list'><Link to="/services" className='nav-link'>Services</Link></li>
                    <li className='nav-list'><Link to="/contact" className='nav-link'>contact</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar