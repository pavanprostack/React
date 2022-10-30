import React from 'react'
import Axios from 'axios'



class Items extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: {}
        }
        this.componentDidMount = () => {
            Axios.get('https://dummyjson.com/products').then((response) => {
                //console.log(response.data)
                this.setState({ items: response.data })
            }).catch()
        }
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state.items)}</pre>


            <div className="container">
                <div className="row">
                    {
                        Object.keys(this.state.items).length > 0 ?
                         <>
                         {
                            this.state.items.products.map((product)=>{
                                return <div className="col-md-3">
                                    <div className="card-header bg-secondary">
                                        <img src={product.thumbnail} alt="images" width='100px' />
                                    </div>
                                    <div className="card-body">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>Brand : <b>{product.brand}</b></li>
                                                <li className='list-group-item'>Price : <b>{product.price}</b></li>
                                                <li className='list-group-item'>Rating : <b>{product.rating}</b></li>
                                                <li className='list-group-item'>Stock : <b>{product.stock}</b></li>
                                            </ul>                          
                                    </div>
                                </div>
                            })
                         }
                         </> : null 
                    }
                </div>
            </div>
        </>
    }
}
export default Items