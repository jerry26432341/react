import React, { useState } from 'react'
import MyButton from './MyButton'

function Counter() {
  // [得到狀態, 設定狀態] = useState(初始值)
  const [total, setTotal] = useState(1)

  return (
    <>
      <div
        className="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <MyButton text="+" value={1} total={total} setTotal={setTotal} />
          <button type="button" className="btn btn-primary">
            {total}
          </button>
          <MyButton text="-" value={-1} total={total} setTotal={setTotal} />
        </div>
      </div>
    </>
  )
}

export default Counter
