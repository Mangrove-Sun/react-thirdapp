import React from 'react'
import style from '../styles/Button.module.css'

function Button() { // size를 props로 받아서 클래스 이름으로 추가될 수 있도록 함.
  return (
    <button className={`${style.Button} ${style.large}`}>
      <p>Button</p>
    </button>
  )
}

export default Button
