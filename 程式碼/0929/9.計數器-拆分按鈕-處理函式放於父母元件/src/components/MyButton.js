import React from 'react'

function MyButton(props) {
  const { text, value, changeTotal } = props

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => {
          changeTotal(value)
        }}
      >
        {text}
      </button>
    </>
  )
}

export default MyButton
