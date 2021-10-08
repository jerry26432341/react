import React, { useState } from 'react'
import MyButton from './MyButton'

function Counter() {
  // [得到狀態, 設定狀態] = useState(初始值)
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <MyButton text="+1" value={1} total={total} setTotal={setTotal} />
      <MyButton text="-1" value={-1} total={total} setTotal={setTotal} />
      <MyButton text="+5" value={5} total={total} setTotal={setTotal} />
    </>
  )
}

export default Counter
