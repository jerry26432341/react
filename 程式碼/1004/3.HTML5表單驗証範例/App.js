import React, { useState } from 'react'

function App(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 在 表單完成驗証 之後，才會觸發
  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))

    // ex. 用fetch api/axios送到伺服器
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          minLength="5"
        />
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
