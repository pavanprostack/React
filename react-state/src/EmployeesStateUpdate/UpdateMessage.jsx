import React from 'react'

class UpdateMessage extends React.Component{
  //    msg="BeforeUpdate"                     // step:1 change this property state object propety.
    
  state={
           msg:"BeforeUpdate"                  // step:2 Create Fatarrow function but don't use normal method/function.
        }                                                // Because Normal function throws large Object, bur FatArrow function throws Empty Object, so use fatarrow function.

   stateUpdate = ()=>{                        // step:3  Using Setstate() we can update our respected proprty inside state object.
    this.setState({msg:"AfterUpdate"})
   }      
  
    render(){
        return <div>
                   <h2>Update Message Using State concept</h2>
                   <button onClick={this.stateUpdate}>Update1</button>
                   <h4>Message={this.state.msg}</h4>
               </div>
    }
}
export default UpdateMessage