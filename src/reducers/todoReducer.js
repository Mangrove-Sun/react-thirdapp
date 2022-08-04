// 추가 / 제거 / 수정
export function todoReducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'REMOVE':
      return state.filter(list => list.id !== action.data.id)
    case 'CHECK':
      return state.map(todo => todo.id === action.data.id ? { ...todo, checked: !todo.checked} : todo)
    default:
      throw new Error(action.data)
  }
}
