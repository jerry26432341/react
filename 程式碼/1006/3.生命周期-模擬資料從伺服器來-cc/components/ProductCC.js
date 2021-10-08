import React, { Component } from 'react'

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

class ProductCC extends Component {
  constructor(props) {
    super(props)
    this.state = { products: [] }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')

    // 模擬商品從伺服器來(fetch/ajax)
    setTimeout(() => {
      this.setState({ products: productsFromServer })
    }, 2000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>商品資料</h1>
        <ul>
          {this.state.products.map((v, i) => {
            return <li key={i}>{v.name}</li>
          })}
        </ul>
      </>
    )
  }
}

export default ProductCC
