import React from 'react'

function MyButton(props) {
  const { text, value, setTotal, total } = props

  return (
    <>
      <button
        onClick={() => {
          setTotal(total + value)
        }}
      >
        {text}
      </button>
    </>
  )
}

export default MyButton
