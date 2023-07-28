import { useState, useEffect } from "react"
import { Messeges } from "./Messeges"

export const SimpleForm = () => {

    const [form, setform] = useState({

        username: "Daniel",
        email: "danielmmd24@gmail.com"
    })
    
    const inputonChange = ({target}) => {

        const {value, name} = target
        setform({

            ...form,
            [name]:value
        }
        )
    }

    const {username, email } = form


    useEffect(() => {
    
        //console.log("useEfect Called")
    
    },[])

    useEffect(() => {
    
       // console.log("form Called")
    
    },[form])

    useEffect(() => {
    
       // console.log("email Called")
    
    },[email])
    
    



    return (
        <>
        
        <h1>Formulario Simple</h1>
        <hr></hr>

        <input
        type="Text"
        className="form-control"
        placeholder="UserName"
        name="username"   
        value={username} 
        onChange={inputonChange}
        />

        
        <input
        type="Email"
        className="form-control mt-2"
        placeholder="Danielmarrugo@gmail.com"
        name="email" 
        value={email}   
        onChange={inputonChange}
        />

        {(username==='Daniel')&&<Messeges/>}
        
        
        </>
    )
}
