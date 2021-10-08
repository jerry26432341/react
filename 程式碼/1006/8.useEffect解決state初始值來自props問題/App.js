import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [start, setStart] = useState(0)

  return (
    <>
      <Counter start={start} />
      <button
        onClick={() => {
          setStart(111)
        }}
      >
        start to 111
      </button>
      <button
        onClick={() => {
          setStart(999)
        }}
      >
        start to 999
      </button>
    </>
  )
}

export default App
