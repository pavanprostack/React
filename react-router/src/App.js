import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'


export class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/home' element={<Home />}/>
                        <Route path='about' element={<About/>} />
                        <Route path='services' element={<Services/>} />
                        <Route path='contact' element={<Contact />}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App