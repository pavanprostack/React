import React from 'react'

class Product extends React.Component{
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
                ...this.state.product, qty:this.state.product.qty -1           //spreadOperator
            }
        })
    }
    increHandler = ()=>{
        this.setState({
            product:{
               ...this.state.product, qty:this.state.product.qty +1             //spreadOperator
            }
        })
    }
    render(){
        return <div>
            <img src={this.state.product.image} alt="Vivo" height="200px" />
            <h2>Name:{this.state.product.name}</h2>
            <h2>Model:{this.state.product.model}</h2>
            <h2>Price:{this.state.product.price}</h2>
            <i class="fa fa-minus-circle" onClick={this.decreHandler}></i>{this.state.product.qty}<i className='fa fa-plus-circle' onClick={this.increHandler}></i>
            <h2>Total:{this.state.product.qty * this.state.product.price}</h2>
        </div>
    }
}
export default Product