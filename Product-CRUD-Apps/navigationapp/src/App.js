import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Product/CreateProduct'
import ProductList from './Product/ProductList'
import Home from './Product/Home'
import Admin from '../src/Product/Admin'


const App = () => {
    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/product' element={<CreateProduct />} />
                <Route path='/list' element={<ProductList />} />
                <Route path='/admin' element={<Admin/>} />
            </Routes>
        </Router>
    </>

}

export default App
