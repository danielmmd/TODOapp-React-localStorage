import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hook"





export const TodoApp = () => {

  
  const {todos, todosCount, todosPending, HandleDeleteTodo, HandleToggleTodo, handleNewtodo} = useTodos()

  

  return (

    <>
    <h1 className=" text-center">TodoApp: {todosCount}, <span>Pendientes: {todosPending}</span></h1>
    <hr />

    <div className="row">
        <div className="col-7">
          <TodoList 
          todos = {todos} 
          onDeleteTodo = {HandleDeleteTodo}
          onToggleTodo ={HandleToggleTodo}/>
        </div>

        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewtodo} />


        </div>
    </div>
    </>
  )
}
