import React from 'react'
import ProductItem from './ProductItem'

// 產品訂購的項目
const products = [
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

function OrderList(props) {
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {products.map((v, i) => {
          return (
            <ProductItem
              key={v.id}
              name={v.name}
              category={v.category}
              image={v.image}
              price={v.price}
            />
          )
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
