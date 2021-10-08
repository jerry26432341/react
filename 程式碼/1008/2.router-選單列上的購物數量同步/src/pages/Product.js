import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import React from 'react'
import { data } from '../data/'

function Product(props) {
  const { cartCount, setCartCount } = props

  return (
    <>
      <h1>Product</h1>
      會員登入情況：{props.auth ? '已登入' : '還未登入'}
      <ul>
        {data.map((v, i) => {
          return (
            <li key={i}>
              {v.name}
              <button
                onClick={() => {
                  // 加到localStorage
                  const myCart = localStorage.getItem('cart')
                    ? JSON.parse(localStorage.getItem('cart'))
                    : []

                  const newMyCart = [...myCart, v]
                  localStorage.setItem('cart', JSON.stringify(newMyCart))

                  // 每次一按加入，選單列購物數量+1
                  setCartCount(cartCount + 1)
                }}
              >
                加入購物車
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Product
