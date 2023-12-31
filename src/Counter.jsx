import React, { useState } from 'react'

export const Counter = () => {

    const [state, setState] = useState(

    { counter1: 10, counter2: 20, counter3: 30, counter4: 40 })

    const {counter1,counter2,counter3,counter4} = state

  return (
    <>
    <h1>Counter: {counter1}</h1>
    <h1>Counter: {counter2}</h1>
    <h1>Counter: {counter3}</h1>
    <h1>Counter: {counter4}</h1>
    <hr/>
    <button className="btn btn-primary" onClick={() => setState({
        ...state,
        counter1: counter1 + 1,})
        }>+1</button>
    </>
  )
}
