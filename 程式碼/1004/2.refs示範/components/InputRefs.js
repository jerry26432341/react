import React, { useRef } from 'react'

function InputRefs(props) {
  const inputRef = useRef()

  return (
    <>
      <h2>使用者帳號(refs)</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'Hello'
        }}
      >
        設定值為Hello
      </button>
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦
      </button>
    </>
  )
}

export default InputRefs
