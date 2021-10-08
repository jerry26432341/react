import React from 'react'

const students = [
  { id: 1, name: 'Eddy' },
  { id: 2, name: 'Amy' },
  { id: 3, name: 'Bob' },
]

function App() {
  return (
    <>
      {/* 用map把陣列每個成員處理過變一個新的陣列 */}
      {/* 用陣列索引值當key要注意是不是變動性 */}
      {/* 用id值當key是最佳解 */}
      <ul>
        {students.map((student, i) => {
          return <li key={student.id}>{student.name}</li>
        })}
      </ul>
      {/* 上面執行的結果 */}
      <ul>
        {[<li key="1">Eddy</li>, <li key="2">Amy</li>, <li key="3">Bob</li>]}
      </ul>
    </>
  )
}

export default App
