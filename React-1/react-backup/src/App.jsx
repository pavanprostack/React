import React from 'react'

import Home from './Home'

import Navbar from './Navbar/Navbar'


function App(){
    return <div>
            
         <Navbar />
         <div className='mt-5'>
        <h1>Function Component</h1>
        <Home />
        </div>
    </div>
}
export default App