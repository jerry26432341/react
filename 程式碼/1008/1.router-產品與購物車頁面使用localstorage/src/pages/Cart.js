import React, { useState, useEffect } from 'react'

function Cart(props) {
  // 加入購物車的產品
  const [products, setProducts] = useState([])

  // didMount 讀 localStorage
  useEffect(() => {
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    setProducts(myCart)
  }, [])

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {products.map((v, i) => {
          return <li key={i}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default Cart
