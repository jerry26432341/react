import React from 'react'

function InputId(props) {
  return (
    <>
      <h2>使用者帳號(id)</h2>
      <input type="text" id="username" />
      <button
        onClick={() => {
          document.getElementById('username').value = 'Hello'
        }}
      >
        設定值為Hello
      </button>
      <button
        onClick={() => {
          document.getElementById('username').focus()
        }}
      >
        聚焦
      </button>
    </>
  )
}

export default InputId
