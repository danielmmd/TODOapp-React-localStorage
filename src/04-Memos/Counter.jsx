import React from "react"


export const Counter = React.memo(({value}) => {

  console.log("El componente se redibuja")
  return (
    <>
    {value}
    </>
    
  )
})
