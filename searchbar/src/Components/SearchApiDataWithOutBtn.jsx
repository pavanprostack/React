import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const SearchApiDataWithOutBtn = () => {

    let [users, setUsers]=useState({})

    useEffect(()=>{
        Axios.get('https://dummyjson.com/users').then((response)=>{
            let dataArray = (response.data).users
            setUsers(dataArray)
        }).catch(()=>{})
    }, [])

  return<>
  <div className="container">
    <pre>{JSON.stringify(users)}</pre>
    <div className="row">
        <div className="col-6">

          

            <table className='table table-hover'>
                <thead className='bg-success'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length > 0 ? <>
                        {
                            users.map((user)=>{
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                        </> : <h1>No Beutiful...There is no Users</h1>
                    }
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </> 
}

export default SearchApiDataWithOutBtn
