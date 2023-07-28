
import  { useState } from 'react'


export const useCounter = (initialValue = 2) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
      setCounter(counter+value)
    } 

    const decrement = (value = 1) => {
      setCounter(counter-value)
    }

    

    const reset = () => {
      setCounter(initialValue=10)
    }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
      
}
