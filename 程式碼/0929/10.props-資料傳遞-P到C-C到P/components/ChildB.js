import React, { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('ChildB Data')

  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(childBData)
        }}
      >
        設定資料到Parent
      </button>
    </>
  )
}

export default ChildB
