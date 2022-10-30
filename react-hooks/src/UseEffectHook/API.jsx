import React from 'react'
import Axios from 'axios'

const API = () => {
    let [users, setUsers] = React.useState({})
    React.useEffect(()=>{
        Axios.get('https://dummyjson.com/users').then((response)=>{
            setUsers({users: response.data})
        }).catch()
    }, [])
  return <>
  <div className="container mt-5">
    <pre>{JSON.stringify(users)}</pre>
    <div className="row">
        <div className="col-8">
            <table className='table table-hover'>
                <thead className='bg-warning'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(users).length > 0 ? 
                        <>
                        {
                            users.users.users.map((user)=>{
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}{user.lastName}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.age}</td>
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

export default API