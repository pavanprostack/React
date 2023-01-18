import React from 'react'

const Message = () => {
    let[name, setname] = React.useState("Pavan")

  let gmHandler =(value)=>{
    setname(value)
  }
   let gaHandler =()=>{
    setname('GoodAfterNoon')
  }
   let gnHandler =()=>{
    setname('GoodNight')
  }
  return <div>
    <pre>Wish:{JSON.stringify(name)}</pre>
    <button className='btn btn-primary' onClick={gmHandler.bind("this", "forks")}>Button</button> <br /><br />
    <button className='btn btn-success' onClick={gaHandler}>Button1</button> <br /><br />
    <button className='btn btn-danger' onClick={gnHandler}>Button2</button>
  </div>
}

export default Message
