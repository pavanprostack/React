import React from 'react'

import Home from './Home'

import Navbar from './Navbar/Navbar'
import Os from './Os/Os'


function App(){
    return <div>
            
         <Navbar />
         <div className='mt-5'>
        <h1>Function Component</h1>
        <Home />
        <Os/>
        </div>
    </div>
}
export default App