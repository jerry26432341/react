import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [parentData, setParentData] = useState('Parent Data')

  // 為了要給 ChildB 設定資料到 Parent
  const [data, setData] = useState('')

  return (
    <>
      <ChildA parentData={parentData} />
      <ChildB setData={setData} />
      <p>由ChildB來的資料：{data}</p>
    </>
  )
}

export default Parent
