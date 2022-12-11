import React from 'react'
import { useRef } from 'react'
import image from '../useRef/pumpkin.png'

const imageEx = () => {
    let getImage = useRef(null);
  return <>
  <div>
    <img src={image} alt="img" ref={getImage} />
    <button onClick={()=>{console.log(getImage.current)}}>click</button>
  </div>
  </>
}

export default imageEx