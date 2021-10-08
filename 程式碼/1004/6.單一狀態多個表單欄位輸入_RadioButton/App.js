import React, { useState } from 'react'
import RadioButton from './components/RadioButton'
import CheckBox from './components/CheckBox'

function App(props) {
  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    intro: '',
    gender: '',
  })

  // radio - 專用元件
  // RadioButton元件有作修改
  const genderOptions = ['男', '女', '不提供', '不確定']

  // 專門用來處理每個欄位的輸入用
  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件拷貝新物件
    // 2. 在拷貝的新物件上處理
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    // 3. 設定回原狀態物件
    setFields(updatedFields)
  }

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
    console.log(formData.get('intro'))
    console.log(formData.get('gender')) //只需要一個值

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
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <br />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"
        />
        <br />
        <label>簡歷</label>
        <textarea
          name="intro"
          value={fields.intro}
          onChange={handleFieldChange}
        />
        <br />
        <label>性別</label>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton
              name="gender"
              key={i}
              value={v}
              checkedValue={fields.gender}
              setCheckedValue={handleFieldChange}
            />
          )
        })}
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
