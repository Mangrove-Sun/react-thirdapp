import React, { useState } from 'react'
import * as S from './style'

function Button() {
  const [isClicked, setIsClicked] = useState(false)
  // size를 props로 받아서 클래스 이름으로 추가될 수 있도록 함.
  return (
    <>
      <S.Button isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? <p>Bye</p> : <p>Hi</p>}
      </S.Button>
    </>
  )
}

export default Button
