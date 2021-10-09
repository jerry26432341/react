import React from 'react'
import { withRouter } from 'react-router-dom'

function About(props) {
  console.log(props)

  return (
    <>
      <h1>About</h1>
      <button
        onClick={() => {
          props.history.push('/product')
        }}
      >
        連到產品頁
      </button>
    </>
  )
}

// HOC(高階元件樣式)
// 擴充本元件的props
export default withRouter(About)
