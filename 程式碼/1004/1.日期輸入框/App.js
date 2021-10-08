import React, { useState } from 'react'
import RadioButton from './components/RadioButton'
import CheckBox from './components/CheckBox'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  // radio - 狀態記錄是被選中選項按鈕的值
  const [gender, setGender] = useState('')
  // radio - 專用元件
  const [gender2, setGender2] = useState('')
  const genderOptions = ['男', '女', '不提供', '不確定']
  // checkbox - single
  const [agree, setAgree] = useState(false)
  // checkbox - group
  const [likeList, setLikeList] = useState([])
  // checkbox - group - 專用元件
  const [likeList2, setLikeList2] = useState([])
  const fruitOptions = ['芒果', '西瓜', '芭樂']
  // date
  const [birth, setBirth] = useState('')

  return (
    <>
      <h1>可控表單元素</h1>
      <section id="inputText">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textArea">
        <h2>文字區域</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="selectedOption">
        <h2>下拉選單</h2>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value)
          }}
        >
          {/* 第一個值會用state的初始值 */}
          <option value="">請選擇</option>
          <option value="雞腿">雞腿</option>
          <option value="魯肉">魯肉</option>
          <option value="排骨">排骨</option>
        </select>
      </section>
      <section id="radioGroup">
        <h2>選項按鈕</h2>
        <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>男</label>
        <br />
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>女</label>
        <br />
        <input
          type="radio"
          value="未定"
          checked={gender === '未定'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>未定</label>
        <br />
      </section>
      <section id="radioButton">
        <h2>選項按鈕(專用元件)</h2>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton
              key={i}
              value={v}
              checkedValue={gender2}
              setCheckedValue={setGender2}
            />
          )
        })}
      </section>
      <section id="checkboxSingle">
        <h2>單一核取方塊</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我同意網站註冊規定</label>
      </section>
      <section id="checkboxGroup">
        <h2>多個核取方塊</h2>
        <input
          type="checkbox"
          value="芒果"
          checked={likeList.includes('芒果')}
          onChange={(e) => {
            // toggle(切換)
            // 如果這選項 在 陣列中 -> 移出陣列
            if (likeList.includes(e.target.value)) {
              //1. 拷貝新陣列
              //2. 新陣列中作處理
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value
              })

              // for迴圈語法
              // const newLikeList = []
              // for (let i = 0; i < likeList.length; i++) {
              //   if (likeList[i] !== e.target.value) {
              //     newLikeList.push(likeList[i])
              //   }
              // }

              //3. 設定回狀態
              setLikeList(newLikeList)
            } else {
              // 如果這選項 不在 陣列中 -> 加入陣列
              //1. 拷貝新陣列
              //2. 新陣列中作處理
              const newLikeList = [...likeList, e.target.value]
              //3. 設定回狀態
              setLikeList(newLikeList)
            }
          }}
        />
        <label>芒果</label>
        <input
          type="checkbox"
          value="西瓜"
          checked={likeList.includes('西瓜')}
          onChange={(e) => {
            // toggle(切換)
            // 如果這選項 在 陣列中 -> 移出陣列
            if (likeList.includes(e.target.value)) {
              //1. 拷貝新陣列
              //2. 新陣列中作處理
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value
              })

              //3. 設定回狀態
              setLikeList(newLikeList)
            } else {
              // 如果這選項 不在 陣列中 -> 加入陣列
              //1. 拷貝新陣列
              //2. 新陣列中作處理
              const newLikeList = [...likeList, e.target.value]
              //3. 設定回狀態
              setLikeList(newLikeList)
            }
          }}
        />
        <label>西瓜</label>
      </section>
      <section id="checkboxGroup2">
        {fruitOptions.map((v, i) => {
          return (
            <CheckBox
              key={i}
              value={v}
              checkedValueList={likeList2}
              setCheckedValueList={setLikeList2}
            />
          )
        })}
      </section>
      <section id="birth">
        <h2>日期輸入框</h2>
        <input
          type="date"
          value={birth}
          onChange={(e) => {
            setBirth(e.target.value)
          }}
        />
      </section>
    </>
  )
}

export default App
