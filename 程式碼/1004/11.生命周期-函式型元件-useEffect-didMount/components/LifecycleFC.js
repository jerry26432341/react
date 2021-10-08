import React, { useState, useEffect } from 'react'

const initialState = () => {
  console.log('initialState(like constructor in CC)')
  return 0
}

function LifecycleFC(props) {
  const [total, setTotal] = useState(initialState())

  // 模擬componentDidMount
  useEffect(() => {
    // didMount
    console.log('componentDidMount(like)')
  }, [])

  return (
    <>
      {console.log('render')}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default LifecycleFC
