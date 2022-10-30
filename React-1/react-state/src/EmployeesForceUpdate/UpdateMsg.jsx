import React from 'react'

class UpdateMsg extends React.Component{
    message="Hello Boys";
    message2="Hello Girls"
    GmHandler = ()=>{
             console.log("Hello, Boys");
             this.message="GoodMorning"
             console.log(this.message);
             this.forceUpdate()
    }
     GnHmandler = ()=>{
        console.log("Hello, Girls")
        this.message2="GoodNight"
        console.log(this.message2);
        this.forceUpdate()
     }


    render(){
        return <div>
                    <h2>Update Message Forcefully</h2>
                    <button onClick={this.GmHandler}>Message</button>  
                    <h4>BoysMessage={this.message}</h4>
                    <button onClick={this.GnHmandler}>Message2</button>
                    <h3>GirlsMessage = {this.message2}</h3> 

               </div>
    }
}
export default UpdateMsg