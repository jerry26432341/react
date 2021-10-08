import React, { useState } from 'react'
import LifecycleCC from './components/LifecycleCC'

function App() {
  const [isLive, setIsLive] = useState(true)

  return (
    <>
      {isLive && <LifecycleCC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
    </>
  )
}

export default App
