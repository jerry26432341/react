import React from 'react'

function User(props) {
  return (
    <>
      <h1>會員中心</h1>
      會員登入情況：{props.auth ? '已登入' : '還未登入'}
      <button
        onClick={() => {
          props.setAuth(true)
        }}
      >
        登入
      </button>
    </>
  )
}

export default User
