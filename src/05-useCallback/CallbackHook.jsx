import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

const [counter, setCounter] = useState(10)


/* const incrementar = () =>{

    setCounter(counter + 1 )

} */


const incrementar = useCallback(
  () => {
    setCounter((value)=>value+1)
  },
  [],
)


  return (
    <>
    
    <h1>useCallbackHook:{counter}</h1>

    <hr />

   <ShowIncrement increment={incrementar}/>


    
    
    </>
    
    
  )
}
