import React, { useEffect, useState } from 'react'

// 產品訂購的項目
const productsFromServer = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
]

function ProductFC(props) {
  // [{
  //   id: 1,
  //   name: '咖啡色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 300,
  // }]
  const [products, setProducts] = useState([])

  // didMount
  // 第二個傳入參數為空陣列時，只執行第一次(讀取到時)
  useEffect(() => {
    console.log('componentDidMount')

    // 模擬商品從伺服器來(fetch/ajax)
    setTimeout(() => {
      setProducts(productsFromServer)
    }, 2000)
  }, [])

  // didMount +  didUpdate
  // 只執行第一次(讀取到時) + 當products有改變時，執行裡面的程式碼
  useEffect(() => {
    console.log('componentDidMount + componentDidUpdate')
  }, [products])

  // didUpdate
  // 當products有改變時，執行裡面的程式碼
  // 使用預設值的概念
  useEffect(() => {
    if (products.length) console.log('componentDidUpdate')
  }, [products])

  return (
    <>
      <h1>商品資料</h1>
      <ul>
        {products.map((v, i) => {
          return <li key={i}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default ProductFC
