import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import User from './User/User'
import Using_componentlifecycle from './User/Using_componentlifecycle'   // User Concept.
import Product from './Product/Product'
import Student from './Student/Student'
import Users from './UserObject/Users'
import ProductObject from './ProductObject/Product'
import Items from './Items/Items'



class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/user' element={<Using_componentlifecycle />} />
                    <Route path='/product' element={<Product />}/>
                    <Route path='/student' element={<Student />} />
                    <Route path='/userobject' element={<Users />} />
                    <Route path='/prdct' element={<ProductObject />} />
                    <Route path='/items' element={<Items />} />
                </Routes>
            </Router>
        </>
    }
}
export default App