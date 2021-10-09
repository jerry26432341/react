import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'

// 模擬從伺服器來的資料
import { data } from '../data/'

function ProductCategory(props) {
  const [products, setProducts] = useState([])

  // didMount
  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <>
      <h1>ProductCategory</h1>
      <MultiLevelBreadCrumb />
      <h2>使用match.params</h2>
      <ul>
        {products.map((v, i) => {
          return (
            <li>
              <Link to={'/product-category/product-detail/' + v.id}>
                {v.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <h2>使用url query string(search params)</h2>
      <ul>
        {products.map((v, i) => {
          return (
            <li>
              <Link to={'/product-category/product-detail-qs/?id=' + v.id}>
                {v.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductCategory
