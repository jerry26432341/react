import React from 'react'
import { withRouter } from 'react-router-dom'

function User(props) {
  return (
    <>
      <h1>會員中心</h1>
      會員登入情況：{props.auth ? '已登入' : '還未登入'}
      <button
        onClick={() => {
          props.setAuth(true)

          alert('登入成功！')

          //導向首頁
          props.history.push('/')
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          //導向首頁
          props.history.goBack()
        }}
      >
        回到上一頁
      </button>
    </>
  )
}

export default withRouter(User)
