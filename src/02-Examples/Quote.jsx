import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({prop, props}) => {

  const [boxsize, setBoxSize] = useState({height : 0 , width : 0})

  
  

  const pRef = useRef()

  useLayoutEffect(() => {

    const {height, width} = pRef.current.getBoundingClientRect()

    setBoxSize({height, width})
    
    
  }, [prop])

  return (
    <>
         <blockquote className="blockquote text-end"
         style={{display:"flex"}}>
            <p ref={pRef} className="mb-1">{prop}</p>
            {/* <img  className="w-50 p-3" src={strDrinkThumb}></img> */}
            <footer className="blockquote-footer mt-2" >{props}</footer>
            
            </blockquote>

            <code>{JSON.stringify(boxsize)}</code>
          
    </>
  )
}
