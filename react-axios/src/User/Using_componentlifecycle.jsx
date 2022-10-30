import React from 'react'
import Axios from 'axios'



class Using_componentlifecycle extends React.Component{
  state = {
    users:[]
  }
  // Component life cycle method.
  componentDidMount = ()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      console.log(response.data);
      this.setState({users:response.data})
    }).catch()
  }
  render(){
    return <>
    <h5>Hi Guys...</h5>
    <pre>{JSON.stringify(this.state)}</pre>
   

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <table className='table table-hover'>
            <thead className='bg-primary text-white'>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.users.length >0 ?                 // Ternary Operator.
                <>
                {
                  this.state.users.map((user, index)=>{
                    return <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  })
                }
                </> : null                 
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  }
}
export default Using_componentlifecycle