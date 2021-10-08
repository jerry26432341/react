import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  const { products, countOne, setCountOne } = props

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
              countOne={countOne}
              setCountOne={setCountOne}
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
