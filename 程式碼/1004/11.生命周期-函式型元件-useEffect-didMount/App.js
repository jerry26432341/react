import React, { useState } from 'react'
import LifecycleCC from './components/LifecycleCC'
import LifecycleFC from './components/LifecycleFC'

function App() {
  const [isLive, setIsLive] = useState(true)

  return (
    <>
      {isLive && <LifecycleFC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
    </>
  )
}

export default App
