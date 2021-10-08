import React, { useState } from 'react'
import LifecycleCC from './components/LifecycleCC'
import LifecycleFC from './components/LifecycleFC'
import ProductCC from './components/ProductCC'
import ProductFC from './components/ProductFC'

function App() {
  const [isLive, setIsLive] = useState(true)

  return (
    <>
      {isLive && <ProductFC />}
      <button onClick={() => setIsLive(!isLive)}>切換</button>
    </>
  )
}

export default App
