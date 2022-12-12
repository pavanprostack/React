import React from 'react'
import { createContext } from 'react'
import ComponentC from './ComponentC'

export const userContext = createContext()

const ComponentA = () => {

    let numb = (a)=>{
        return a+10
    }
    numb()

  return (
    <div>
      <center>
        <userContext.Provider value={numb(60)}>
            <ComponentC/>
        </userContext.Provider>
      </center>
    </div>
  )
}

export default ComponentA

