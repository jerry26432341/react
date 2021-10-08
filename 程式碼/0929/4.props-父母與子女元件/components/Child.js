import React from 'react'

function Child(props) {
  console.log(props)
  return (
    <>
      {/* 子女元件透過props得到父母元件傳來的資料 */}
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </>
  )
}

export default Child
