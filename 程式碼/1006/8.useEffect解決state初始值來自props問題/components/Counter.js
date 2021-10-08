import React, { useState, useEffect } from 'react'

function Counter(props) {
  // 希望計數器的起始值由父母元件來決定
  // 只有在元件一開始呈現在網頁上時才會初始化，只有一次
  const [total, setTotal] = useState(props.start)

  // 解決方法：當從父母元件的初始值變化時，本元件的狀態要重新初始化
  useEffect(() => {
    setTotal(props.start)
  }, [props.start])

  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
    </>
  )
}

export default Counter
