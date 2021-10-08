import React from 'react'

function ChildA(props) {
  return (
    <>
      <h2>ChildA</h2>
      父母傳過來的資料：{props.parentData}
    </>
  )
}

export default ChildA
