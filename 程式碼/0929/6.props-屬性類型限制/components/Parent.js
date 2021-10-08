import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
      {/* 在父母元件的render(return)中使用子女元件 */}
      <Child text="Hello" name="Eddy" />
      <Child text={2} name={1} />
      <Child />
    </>
  )
}

export default Parent
