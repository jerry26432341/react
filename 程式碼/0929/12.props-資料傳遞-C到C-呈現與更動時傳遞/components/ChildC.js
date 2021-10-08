import React from 'react'

function ChildC(props) {
  return (
    <>
      <h2>ChildC</h2>
      ChildB傳過來的資料：{props.data}
    </>
  )
}

export default ChildC
