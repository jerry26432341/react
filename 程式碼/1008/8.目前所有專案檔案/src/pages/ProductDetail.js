import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { data } from '../data/'

function ProductDetail(props) {
  console.log(props)

  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  const [isLoading, setIsLoading] = useState(true)

  // didMount+didUpate
  useEffect(() => {
    const id = props.match.params.id

    // 如果id存在的話
    // ex.用id向伺服器(資料庫)要資料
    if (id) {
      const foundProduct = data.find((v, i) => {
        return v.id === id
      })

      setProduct(foundProduct)
    }

    // 把載入動畫提示關起來
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [props.match.params.id])

  // 載入的css動畫
  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  // 要呈現的資料
  const display = (
    <>
      <p>名稱：{product.name}</p>
      <p>價格：{product.price}</p>
    </>
  )

  return (
    <>
      <h1>產品詳細頁</h1>
      {/* 用載入指示的旗標來切換呈現 */}
      {isLoading ? spinner : display}
    </>
  )
}

export default withRouter(ProductDetail)
