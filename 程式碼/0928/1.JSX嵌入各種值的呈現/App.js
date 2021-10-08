import React from 'react'
import './App.css'

function App() {
  let foo = 10

  return (
    <>
      {1}
      <hr />
      {'abc'}
      <hr />
      {/* 下面這4種值會不會呈現 */}
      {true}
      <hr />
      {false}
      <hr />
      {null}
      <hr />
      {undefined}
      <hr />
      {/* 下面這行會呈現 1234 */}
      {[1, 2, 3, 4]}
      <hr />
      {/* 下面這行會讓程式錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <hr />
      {/* 下面這行不會呈現 */}
      {function () {
        console.log(1)
      }}
    </>
  )
}

export default App
