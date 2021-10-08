import React, { useState } from 'react'
import MyButton from './MyButton'

function Counter() {
  // [得到狀態, 設定狀態] = useState(初始值)
  const [total, setTotal] = useState(1)

  // 處理狀態的函式寫在這
  const changeTotal = (value) => {
    const newTotal = total + value < 1 ? 1 : total + value
    setTotal(newTotal)
  }

  return (
    <>
      <div
        className="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <MyButton text="+" value={1} changeTotal={changeTotal} />
          <button type="button" className="btn btn-primary">
            {total}
          </button>
          <MyButton text="-" value={-1} changeTotal={changeTotal} />
        </div>
      </div>
    </>
  )
}

export default Counter
