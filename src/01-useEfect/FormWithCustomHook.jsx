import { useState, useEffect } from "react"
import { Messeges } from "./Messeges"
import { useForm } from "../hook/useForm"

export const FormWithCustoHook = () => {

    const {formState, onResetForm , inputonChange, username, email, password} = useForm ({

        
        username: "",
        email: "",
        password: ""

    })

    //const {username, email, password } = formState



    return (
        <>
        
        <h1>Formulario con custom Hook</h1>
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
        type="email"
        className="form-control mt-2"
        placeholder="Danielmarrugo@gmail.com"
        name="email" 
        value={email}   
        onChange={inputonChange}
        />

        <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password" 
        value={password}   
        onChange={inputonChange}
        />


        {/* {(username==='Daniel')&&<Messeges/>} */}
        
        <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
        </>
    )
}
