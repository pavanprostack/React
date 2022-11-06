import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'


const Admin = () => {
    let [products, setProducts]=useState([])
    let [errorMessage, setErrorMessage]= useState('')
    useEffect(()=>{
        Axios.get('http://127.0.0.1:5000/api/products/').then((response)=>{
            setProducts(response.data)
        }).catch((err)=>{
            setErrorMessage(err)
        })
    }, [])
  return <>
  <div className="container">
    <div className="row">
        <pre>{JSON.stringify(products)}</pre>
    <div className="col-6">
        <table className='table table-hover'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody>
               {
                products.length>0?<>
                {
                    products.map((product, index)=>{
                        return <tr key={index}>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt="img" width='70px'/></td>
                            <td>{product.name}</td>
                            <td>{product.qty}</td>
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

export default Admin
