import React, { useState, useEffect } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('ChildB Data')

  // 設定資料到Parent(當childBData有更動時)
  // 情況一：一開始本元件呈現時就設定資料到Parent
  // 情況二：更動時也會設定資料到Parent
  useEffect(() => {
    props.setData(childBData)
  }, [childBData])

  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          setChildBData('ChildB Data有更動')
        }}
      >
        更動childBData
      </button>
    </>
  )
}

export default ChildB
