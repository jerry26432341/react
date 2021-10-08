import React, { useState } from 'react'

function CounterFC() {
  // [得到狀態, 設定狀態] = useState(初始值)
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          const newTotal = total + 1 //同步
          setTotal(newTotal) // 異步，用途一：react改變網頁上的dom元素
          // 得到設定完成後的狀態
          console.log(newTotal) // 同步，用途二：主控台輸出最後的狀態值
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default CounterFC
