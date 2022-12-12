import React from 'react'
import { userContext } from './ComponentA'

const ComponentC = () => {

  return <>
  <h1>Hello World</h1>
  <userContext.Consumer>
    {
        (value)=><div>{value}</div>
    }
  </userContext.Consumer>
  </>
}

export default ComponentC
