import React from 'react'

class ProductTable extends React.Component{
    state= {
        product:{
            name:"Vivo",
            model:"V23 5G",
            price:45000,
            image:"https://www.mantraman.in/wp-content/uploads/2022/03/ESF.jpg",
            qty:1
        }
    }
    decreHandler = ()=>{
        this.setState({
            product:{
                ...this.state.product, qty:this.state.product.qty -1
            }
        })
    }
    increHandler = ()=>{
        this.setState({
            product:{
                ...this.state.product, qty:this.state.product.qty +1
            }
        })
    }
    render(){
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <table className='table table-hover'>
                        <thead className='bg-primary'>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Model</th>
                            <th>qty</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product.name}</td>
                                <td><img src={this.state.product.image} alt="Vivo" height="100px" /></td>
                                <td>{this.state.product.price}</td>
                                <td>{this.state.product.model}</td>
                                <td><i className='fa fa-minus-circle' onClick={this.decreHandler}></i> {this.state.product.qty} <i className='fa fa-plus-circle' onClick={this.increHandler}></i></td>
                                <td>{this.state.product.qty * this.state.product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
export default ProductTable