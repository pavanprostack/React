import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'

const SearchAPIData = () => {

    let [products, setProduct] = useState({})

    // Search Operation

    let [searchName, setSearchName] = useState('')

    let [foundProduct, setFoundProduct] = useState({})

    let filter = (e) => {
        let keyWord = e.target.value
        console.log(keyWord);
        setSearchName(keyWord)

        if (searchName !== "") {
            let results = foundProduct.products.filter((singleProduct) => {
                return singleProduct.title.toLowerCase().startsWith(searchName.toLowerCase());
            })
            setFoundProduct(results);
        } else {
            setFoundProduct(foundProduct)
        }
    }

    useEffect(() => {
        Axios.get('https://dummyjson.com/products').then((res) => {
            setProduct(res.data)
            setFoundProduct(res.data)
        }).catch(() => { })
    }, [])
    return <>
        <div className="container">
            <pre>{JSON.stringify(products)}</pre>
            <pre>{JSON.stringify(foundProduct)}</pre>
            <div className="row">
                <div className="col">

                    <input type="search" className='input' value={searchName} placeholder='Filter' onChange={filter} />

                    <table className='table table-hover'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                              foundProduct && Object.keys(foundProduct).length > 0 ? <>
                              {
                                foundProduct.products.map((product)=>{
                                    return <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                })
                              }
                              </> : null
                            } */}
                            {
                                Object.keys(products).length > 0 ? <>
                                    {
                                        products.products.map((product) => {
                                            return <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
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

export default SearchAPIData
