import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

function Menu(props) {
  const { cartCount } = props
  return (
    <>
      <ul className="menu">
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
        <li>
          <button type="button" className="btn btn-primary">
            購物數量 <span className="badge badge-light">{cartCount}</span>
            <span class="sr-only"></span>
          </button>
        </li>
      </ul>
    </>
  )
}

export default Menu
