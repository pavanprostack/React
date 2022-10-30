import React from 'react'
import Axios from 'axios'


class Product extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        products:[]
    }
    // Component life cycle method.
    componentDidMount = ()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response.data)
            this.setState({products:response.data})
        }).catch()
    }
    render(){
        return <>
        <h5>Product Details</h5>
        <pre>{JSON.stringify(this.state)}</pre>


        <div className="container">
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
                                this.state.products.length > 0 ?
                                 <>
                                 {
                                   this.state.products.map((product, index)=>{
                                    return <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.email}</td>
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
export default Product