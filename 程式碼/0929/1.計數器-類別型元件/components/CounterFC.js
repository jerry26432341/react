import React, { useState } from 'react'

function CounterFC() {
  // [得到狀態, 設定狀態] = useState(初始值)
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default CounterFC
