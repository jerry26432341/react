import React from 'react'

function CheckBox(props) {
  const { value } = props

  return (
    <>
      <input type="checkbox" {...props} />
      <label>{value}</label>
    </>
  )
}

export default CheckBox
