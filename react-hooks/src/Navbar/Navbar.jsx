import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return <div>
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <Link to="#" className='navbar-brand'>Navbar Hooks</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link className='nav-link' to="message">Message</Link></li>
                <li className='nav-list'><Link className='nav-link' to="product">Product</Link></li>
                <li className='nav-list'><Link className='nav-link' to="clock">Clock</Link></li>
                <li className='nav-list'><Link className='nav-link' to="item">Item</Link></li>
                <li className='nav-list'><Link className='nav-link' to="useEffect">UseEffect</Link></li>
            </ul>
        </div>
    </nav>
  </div>
}

export default Navbar
