import React from 'react'

// 註：修改為可以對應多重表單元件輸入
function RadioButton(props) {
  const { name, value, checkedValue, setCheckedValue } = props

  return (
    <>
      <input
        name={name}
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={setCheckedValue}
      />
      <label>{value}</label>
    </>
  )
}

export default RadioButton
