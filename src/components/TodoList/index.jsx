import React, { useRef, useState } from 'react'
import TodoAdd from '../TodoAdd'
import TodoItem from '../TodoItem'
import * as S from './style'

function TodoList() {
  const todoId = useRef(2) // 변한데이터를 저장은하지만 재 렌더링은 하지 않게 하기위해 useRef()사용
  const [todoData, setTodoData] = useState([
    { id: 1, date: '2022-07-29', content: '강의하기', checked: false },
  ])

  const todoRemoveHandler = (id) => {
    setTodoData(todoData.filter((itemData) => itemData.id !== id))
  }

  const todoCheckHandler = (id) => {
    // setTodoData(todoData.map(itemData => 수정하고자 하는 id와 같다면 / checked 값을 반대로 바꾸고 / 아니면 그대로))
    setTodoData(
      todoData.map((itemData) =>
        itemData.id === id
          ? { ...itemData, checked: !itemData.checked }
          : itemData,
      ),
    )
  }
  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 TodoList</S.TodoTitle>
      <TodoAdd todoId={todoId} todoData={todoData} setTodoData={setTodoData} />
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
