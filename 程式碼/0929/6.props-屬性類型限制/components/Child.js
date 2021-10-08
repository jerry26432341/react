import React from 'react'
import PropTypes from 'prop-types'

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
  name: 'Amy',
  text: 'Hello',
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Child
