import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Android from './pages/sub-product/Android'
import Apple from './pages/sub-product/Apple'

function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route exact path="/product/apple">
            <Apple />
          </Route>
          <Route exact path="/product/android">
            <Android />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
