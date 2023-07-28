
import { useEffect, useState } from "react"




export const useFetch = (url) => {

  const [state, setState] = useState({

    data: null,
    isLoading : true,
    hasError : null


  })

  const getFetch = async() =>{

    setState({
      ...state,
      isLoading:true
    })

    const resp = await fetch(url)
    const data = await resp.json();

    if(data.drinks != null){

      setState({
        data: data,
        isLoading : false,
        hasError : null
      })
  

    }

    else{
      console.log("es nulo")
    }

    
    
  };


  useEffect(() => {

    getFetch();
      
  }, [url])
  


  return {

    data: state.data,
    isLoading : state.isLoading,
    hasError : state.hasError

  }
    
  
}
