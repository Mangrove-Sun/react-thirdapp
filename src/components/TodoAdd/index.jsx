import React, { useState } from 'react'
import * as S from './style'

function TodoAdd({ todoId, todoData, setTodoData }) {
  const [userInput, setUserInput] = useState({ date: '', content: '' })

  const userInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const todoAddHandler = (userInput) => {
    setTodoData([
      ...todoData,
      {
        id: todoId.current, // useRef() 같은경우 .current를 붙여줘야 그 값에 접근할 수 있다.
        date: userInput.date,
        content: userInput.content,
        checked: false,
      },
    ])
    todoId.current += 1 // useRef() 같은경우 .current를 붙여줘야 그 값에 접근할 수 있다.
  }
  return (
    <S.AddContainer>
      <S.AddInput type="date" name="date" onChange={userInputHandler} />
      <S.AddInput name="content" onChange={userInputHandler} />
      <S.AddButton onClick={() => todoAddHandler(userInput)}>
        추가하기
      </S.AddButton>
    </S.AddContainer>
  )
}

export default TodoAdd
