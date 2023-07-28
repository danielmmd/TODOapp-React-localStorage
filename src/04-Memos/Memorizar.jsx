
import {useCounter} from "../hook/useCounter"
import { Counter } from './Counter'
import { useState } from 'react'

export const Memorizar = () => {

    const {counter, increment} = useCounter(10)
    const [first, setfirst] = useState(true)

  return (
    <>

    <h1>El contador es: <Counter value={counter}/></h1>
    
    <hr></hr>
    
    <button
    className='btn btn-primary'
    onClick={() => increment()}

    >Counter</button>

    <button
    className='btn btn-outline-danger'
    onClick={() => setfirst(!first)}

    >Cambiar estado {JSON.stringify(first)}</button>
    
    
    </>
    
  )
}
