import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'


const Admin = () => {
    let [products, setProducts]=useState([])
    let [errorMessage, setErrorMessage]= useState('')
    let [deletedProduct, setDeletedProduct] = useState("")
    useEffect(()=>{
        Axios.get('http://localhost:3000/products').then((response)=>{
            setProducts(response.data)
        }).catch((err)=>{
            setErrorMessage(err)
        })
    }, [])

    let deleteProduct = (e)=>{
        Axios.delete(`http://localhost:3000/products.${product.name}`).then(()=>{}).catch(()=>{})
    }

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
                    <th>Action</th>
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
                            <td>{product.price}</td>
                            <td>{product.qty}</td>
                            <td><Link className='btn btn-success'>Edit</Link>&nbsp;<Link className='btn btn-danger' onClick={deleteProduct.bind(this, product.name)}>Delete</Link></td>
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
