
import ReactDOM from 'react-dom/client'
import './index.css'
//import { Memorizar } from './04-Memos/Memorizar'
//import { MemoHook } from './04-Memos/MemoHook'
//import { CallbackHook } from './05-useCallback/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import { CounterWithCuustomHooks } from './CounterWithCuustomHooks'
//import { SimpleForm } from './01-useEfect/SimpleForm'
//import { FormWithCustoHook } from './01-useEfect/FormWithCustomHook'
//import { MultipleCustomHook } from './02-Examples/MultipleCustomHook'
//import { Layout } from './0-3 useLayaout/Layout'
//import { HoockApp } from './HoockApp'
//import { Counter } from './Counter'

//import './08-Reducer/intro-reducer'
import { TodoApp } from './08-Reducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp/>
  //</React.StrictMode>,
)