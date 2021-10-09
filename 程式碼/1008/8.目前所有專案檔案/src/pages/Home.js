import React from 'react'

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      會員登入情況：{props.auth ? '已登入' : '還未登入'}
    </>
  )
}

export default Home
