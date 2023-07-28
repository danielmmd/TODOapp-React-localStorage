
import { useEffect, useState } from "react"

export const Messeges = () => {

    const [coords, setcoords] = useState({x:0,y:0})

    useEffect(() => {

        const onMouseMove = ({x,y}) =>{

            setcoords({
                
                x,
                y,
            })

            console.log(coords)

        }

        window.addEventListener( 'mousemove', onMouseMove)

        
      
        return () => {
        
        window.removeEventListener( 'mousemove', onMouseMove)

        
         
        }
      }, [coords])

  return (
    
    
    

    <>
    
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    
    
    </>

  )
}
