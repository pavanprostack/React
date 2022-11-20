import React from 'react'

import Home from './Home'

import Navbar from './Navbar/Navbar'
import SystemOs from './SystemOs/SystemOs'


function App(){
    return <div>
            
         <Navbar />
         <div className='mt-5'>
            {/* <h1>Function Component</h1>
            <Home /> */}
        <SystemOs/>
        </div>
    </div>
}
export default App