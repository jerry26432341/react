import React from 'react'

function Child(props) {
  // 先解構出屬性名稱變數
  const { name, text } = props

  return (
    <>
      {/* 子女元件透過props得到父母元件傳來的資料 */}
      <h1>{name}</h1>
      <p>{text}</p>
    </>
  )
}

Child.defaultProps = {
  name: '陳小花',
  text: 'Hello',
}

export default Child
