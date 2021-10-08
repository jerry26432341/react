import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import React from 'react'

function Product(props) {
  return (
    <>
      <h1>Product</h1>
      會員登入情況：{props.auth ? '已登入' : '還未登入'}
    </>
  )
}

export default Product
