import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'

const SearchAPIData = () => {

    let [products, setProduct] = useState({})

    let [searchName, setSearchName] = useState('')

    // let url = 'https://dummyjson.com/products'
    let [foundProduct, setFoundProduct] = useState({})
    console.log(foundProduct)

    let filter = (e) => {

        let keyWord = e.target.value
        console.log(keyWord)

        if (searchName !== "") {
            let result = foundProduct.products.filter((singleProduct) => {
                // console.log(singleProduct);
                return singleProduct.title.toLowerCase().startsWith(keyWord.toLowerCase())
            })
            setFoundProduct(result)

        } else {

            setFoundProduct(products)

        }


    }

    let mainFun = (event) => {
        let keyWord = event.target.value
        setSearchName(keyWord)
        // console.log(searchName)
        filter()
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

                    <input type="search" className='input' value={searchName} placeholder='Filter' onChange={mainFun} />

                    <table className='table table-hover'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
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
