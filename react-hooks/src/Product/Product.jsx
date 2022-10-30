// import React from 'react'

// const Product = () => {
//     let [product, setProduct] = React.useState(0);
//     let decreHandler = ()=>{
//         setProduct(product - 1)
//     }
//     let increHandler = ()=>{
//         setProduct(product + 1)
//     }
//     return <>
//         <pre>{JSON.stringify(product)}</pre>
//        <button onClick={decreHandler}>Decre</button> &nbsp;
//        <button onClick={increHandler}>Incre</button>
//     </>
// }

// export default Product


import React from 'react'

const Item = () => {
    let [item, setItem] = React.useState(0)
  return <>
  <pre>{JSON.stringify(item)}</pre>
 <button onClick={()=>{setItem(item - 1)}}>Decre</button> &nbsp;
<button onClick={()=>{setItem(item + 1)}}>Incre</button>
  </>
}

export default Item
