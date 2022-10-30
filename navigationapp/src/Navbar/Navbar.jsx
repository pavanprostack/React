import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to="#" className='navbar-brand'>Product Navigation App</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-list'><Link to="home" className='nav-link'>Home</Link></li>
            <li className='nav-list'><Link to="product" className='nav-link'>Product</Link></li>
            <li className='nav-list'><Link to="list" className='nav-link'>ProductList</Link></li>
        </ul>
    </div>
  </nav>
  </>
}

export default Navbar
