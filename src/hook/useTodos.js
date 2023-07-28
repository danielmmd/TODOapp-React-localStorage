import { useReducer, useEffect } from "react"
import {TodoReducer} from "../08-Reducer/TodoReducer"

const initialState = []

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

}


export const useTodos = () => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

    
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos])
    

  const handleNewtodo = (todo) => {

    const action = {

      type: '[TODO] ADD todo',
      payload: todo

    }

    dispatch(action)

  }   

  
  const HandleDeleteTodo = (id) => {

    const actionDelete = {

      type: '[TODO] DELETE todo',
      payload: id

    }
    
    dispatch(actionDelete)

  }

  const HandleToggleTodo =  (id) => {

    

    const actionComplete = {

      type: '[TODO] COMPLETE todo',
      payload: id

    }

    dispatch(actionComplete)

  }
  
  
return{
    todos,
    HandleDeleteTodo,
    HandleToggleTodo,
    handleNewtodo,
    todosCount : todos.length,
    todosPending : todos.filter( todos => !todos.done).length
}
   
  
}
