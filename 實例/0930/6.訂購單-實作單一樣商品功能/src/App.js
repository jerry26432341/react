import { useState } from 'react'
import './App.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  // {
  //   id: 2,
  //   name: '白色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/ba3tvGm.jpg',
  //   price: 200,
  // },
  // {
  //   id: 3,
  //   name: '黑色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/pHQ3xT3.jpg',
  //   price: 450,
  // },
]

function App() {
  // 目前先實作只有一樣產品
  const [countOne, setCountOne] = useState(1)

  return (
    <div className="card">
      <div className="row">
        <OrderList
          products={products}
          setCountOne={setCountOne}
          countOne={countOne}
        />
        <Summary productCount={countOne} total={countOne * products[0].price} />
      </div>
    </div>
  )
}

export default App
