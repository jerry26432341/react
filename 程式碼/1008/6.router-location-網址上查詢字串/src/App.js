import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'

import Android from './pages/sub-product/Android'
import Apple from './pages/sub-product/Apple'
import User from './pages/User'
import Cart from './pages/Cart'

import UserAdminIndex from './pages/admin/user/UserAdminIndex'

import Menu from './components/Menu'

function App() {
  // 指示會員是否登入，true = 登入
  const [auth, setAuth] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // didMount
  useEffect(() => {
    // 問伺服器是否有會員登入
    // 如果有登入，設定auth為true
    //setAuth(true)

    //請localstorage中的購物車數量
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    // 設定為陣列的長度(成員數量)
    setCartCount(myCart.length)
  }, [])

  return (
    <Router>
      <>
        <Menu cartCount={cartCount} />

        <Switch>
          {/* 路徑愈長往愈上面放 */}
          <Route path="/product/apple">
            <Apple />
          </Route>
          <Route path="/product/android">
            <Android />
          </Route>
          <Route path="/product-detail/:id?">
            <ProductDetail />
          </Route>
          <Route path="/product">
            <Product cartCount={cartCount} setCartCount={setCartCount} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User auth={auth} setAuth={setAuth} />
          </Route>
          <Route path="/admin/user/:task?/:id?">
            <UserAdminIndex />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
