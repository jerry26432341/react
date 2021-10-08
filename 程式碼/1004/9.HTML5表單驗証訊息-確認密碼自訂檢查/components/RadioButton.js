import React from 'react'

// 註：修改為可以對應多重表單元件輸入
function RadioButton(props) {
  const { value } = props

  return (
    <>
      <input type="radio" {...props} />
      <label>{value}</label>
    </>
  )
}

export default RadioButton
