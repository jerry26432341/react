import React, { useState, useEffect, useRef } from 'react'

const initialState = () => {
  console.log('initialState(like constructor in CC)')
  return 0
}

function LifecycleFC(props) {
  const [total, setTotal] = useState(initialState())
  //const [didMount, setDidMount] = useState(false)

  const didMountRef = useRef(false)

  // 模擬componentDidMount
  useEffect(() => {
    // didMount
    console.log('componentDidMount(模擬)')

    // 設定目前進入didMount階段
    //setDidMount(true)
  }, [])

  // 模擬componentDidUpdate+componentDidMount
  // didMount時因為total會改變也會執行一次
  useEffect(() => {
    console.log('componentDidUpdate+componentDidMount(模擬)', total)
  }, [total])

  // 只模擬componentDidUpdate
  // 利用didMount狀態值來完整模擬
  // eslint會有警告(注意：不需要加入didMount狀態在依賴陣列中)
  // 要使用這種方式要搭配第10，20行
  // useEffect(() => {
  //   if (didMount) {
  //     console.log('componentDidUpdate(模擬)', total)
  //   }
  // }, [total])

  // 只模擬componentDidUpdate
  // 利用didMountRef來完整模擬
  useEffect(() => {
    if (didMountRef.current) {
      console.log('componentDidUpdate(模擬)', total)
    } else {
      didMountRef.current = true
    }
  }, [total])

  // 模擬componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount(模擬)', total)
    }
  }, [total])

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
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default LifecycleFC
