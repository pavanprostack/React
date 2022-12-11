import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Product from './Product/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Item from './Product/Item'
import Clock from './Clock/Clock'
import API from './UseEffectHook/API'
import ImageEx from './useRef/ImageEx'
import LoginEx from './useRef/LoginEx'



const App = () => {
  
  
  return <div>
    <Router>
      <Navbar />
      <Routes>
        <Route  path='/message' element={<Message />}/>
        <Route  path='/product' element={<Product />}/>
        <Route  path='/item' element={<Item />}/>
        <Route path='/clock' element={<Clock />} />
        <Route path='/useEffect' element={<API />} />
        <Route path='/ref' element={<ImageEx />} />
        <Route path='/login' element={<LoginEx />} />
      </Routes>
    </Router>
    </div>
  
}

export default App
