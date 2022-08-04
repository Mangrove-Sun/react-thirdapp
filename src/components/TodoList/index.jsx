import React, { useReducer, useRef } from 'react'
import { todoReducer } from '../../reducers/todoReducer'
import TodoAdd from '../TodoAdd'
import TodoItem from '../TodoItem'
import * as S from './style'

function TodoList() {
  const todoId = useRef(1) // 변한데이터를 저장은하지만 재 렌더링은 하지 않게 하기위해 useRef()사용
  const [todoData, dispatch] = useReducer(todoReducer, [])

  const todoAddHandler = (userInput) => {
    dispatch({ type: 'ADD', data: { ...userInput, id: todoId.current } })
    todoId.current += 1
  }
  const todoRemoveHandler = (id) => {
    dispatch({ type: 'REMOVE', data: { id } })
  }
  const todoCheckHandler = (id) => {
    dispatch({ type: 'CHECK', data: { id } })
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 TodoList</S.TodoTitle>
      <TodoAdd todoAddHandler={todoAddHandler} />
      {todoData.map((itemData) => {
        return (
          <TodoItem
            itemData={itemData}
            todoCheckHandler={todoCheckHandler}
            todoRemoveHandler={todoRemoveHandler}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoList
