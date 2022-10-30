import React from 'react'
import Axios from 'axios'




class ProductObject extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            employees : {}
        }
        this.componentDidMount = ()=>{
            Axios.get('https://dummyjson.com/products').then((resp)=>{
                console.log(resp.data);
                this.setState({employees:resp.data})
            }).catch(()=>{})
        }
    }
    render(){
        return <>
        <pre>{JSON.stringify(this.state.employees)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <table  className='table table-hover'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Discount Percentage</th>
                                <th>Images</th>
                                <th>Rating</th>
                                <th>Pictures</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(this.state.employees).length > 0 ?
                                 <>
                                 {
                                    this.state.employees.products.map((employee)=>{
                                        return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.brand}</td>
                                            <td>{employee.price}</td>
                                            <td className='text-center'>{employee.discountPercentage}</td>
                                            <td><img src={employee.thumbnail} alt="img" width="50px" /></td>
                                            <td>{employee.rating}</td>
                                            <td><img src={employee.images[0]} alt="img" width='50px' /></td>                                  
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
export default ProductObject