import React from 'react'

const Item = () => {
    let [item, setItem] = React.useState({
        name:"Vivo",
        price:80000,
        qty:0
    })
   let decreHandler = ()=>{
    setItem({...item, qty:item.qty - 1})
   }
   let increHandler = ()=>{
    setItem({...item, qty:item.qty + 1})
   }
  return <>
  <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
            <table className='table table-hover'>
                <thead className='bg-success'>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>QTY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><button onClick={decreHandler}>-</button> {item.qty} <button onClick={increHandler}>+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </>
}

export default Item
