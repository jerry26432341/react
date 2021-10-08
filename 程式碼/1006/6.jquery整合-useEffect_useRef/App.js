import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

// 參考這裡的步驟說明：
// https://github.com/eyesofkids/mfee19-react/issues/9
function App() {
  const [data, setData] = useState(123)
  const buttonRef = useRef()

  // didMount
  useEffect(() => {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $(buttonRef.current).click(() => alert('data is ' + data))
  }, [])

  return (
    <>
      <button ref={buttonRef}>click me</button>
    </>
  )
}

export default App
