
import {useCounter} from "../hook/useCounter"

import { useState, useMemo} from 'react'


const iteracionValue = (n = 1000) =>{

  for(let i = 0; i<n; i++ ){

    console.log("Ahi vamos...")

  }

  return (`${n} iteraciones realizadas`)
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(400)
    const [first, setfirst] = useState(true)
    const Memorizar = useMemo(() => iteracionValue (counter), [counter])

  return (
    <>

    <h1>El contador es: <small>{counter}</small></h1>
    
    <hr></hr>

    <h4>{Memorizar}</h4>
    
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
