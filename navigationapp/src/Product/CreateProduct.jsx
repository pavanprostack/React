import React from 'react'
import { useState } from 'react'
import Axios from 'axios'


const CreateProduct = () => {

  let [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    qty: "",
    info: ""

  })

  let [submitted, setSubmitted] = useState(false)
  
  let updateHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }


  let submitHandler = (event) => {
    event.preventDefault();
    //    alert(JSON.stringify(product))

    let url = 'http://127.0.0.1:5000/api/products/';
    Axios.post(url, product).then((response) => {
      console.log(response.data)
      setSubmitted(true);
    }).catch(() => { })


  }


  return <>
    <div className="container mt-5">
      <pre>{JSON.stringify(product)}</pre>
      <pre>{JSON.stringify(submitted)}</pre>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3>Create Product</h3>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className='form-group'>
                  <input type="text" onChange={updateHandler} name='name' className='form-control' placeholder='Product Name' />
                </div>
                <div className='form-group'>
                  <input type="number" onChange={updateHandler} name='price' className='form-control' placeholder='Price' />
                </div>
                <div className='form-group'>
                  <input type="file" onChange={updateHandler} name='image' className='form-control-file' placeholder='Image' />
                </div>
                <div className='form-group'>
                  <input type="number" onChange={updateHandler} name='qty' className='form-control' placeholder='Qty' />
                </div>
                <div className='form-group'>
                  <input type="text" onChange={updateHandler} name='info' className='form-control' placeholder='Info' />
                </div>
                <input type="submit" className='btn btn-success' value='Create Product' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default CreateProduct
