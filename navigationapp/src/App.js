import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Product/CreateProduct'
import ProductList from './Product/ProductList'
import Home from './Product/Home'


const App = () => {
    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/product' element={<CreateProduct />} />
                <Route path='/list' element={<ProductList />} />
            </Routes>
        </Router>
    </>

}

export default App
