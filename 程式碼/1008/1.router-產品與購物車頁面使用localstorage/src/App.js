import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Android from './pages/sub-product/Android'
import Apple from './pages/sub-product/Apple'
import User from './pages/User'
import Cart from './pages/Cart'

function App() {
  // 指示會員是否登入，true = 登入
  const [auth, setAuth] = useState(false)

  // didMount
  // useEffect(() => {
  //   // 問伺服器是否有會員登入
  //   // 如果有登入，設定auth為true
  //   setAuth(true)
  // }, [])

  return (
    <Router>
      <>
        <h2>選單</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        <Switch>
          {/* 路徑愈長往愈上面放 */}
          <Route path="/product/apple">
            <Apple />
          </Route>
          <Route path="/product/android">
            <Android />
          </Route>
          <Route path="/product">
            <Product auth={auth} />
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
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
