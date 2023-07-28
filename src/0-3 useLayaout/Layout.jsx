import { useFetch, useCounter} from "../hook/"
import { Quote } from "../02-Examples/Quote";
import { LoadingCoktail } from "../02-Examples/LoadingCoktail";




export const Layout = () => {

  const {increment, counter} = useCounter(1);

  const {data, isLoading, hasError} = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1100${counter}`)


  console.log({data, isLoading, hasError});

  const { strInstructions, strDrink, strDrinkThumb } = !!data && data.drinks[0] ;

  


  return (
    <>

      <h1>BreakingBad Quotes</h1>
      <hr></hr>

      {
        (isLoading)?<LoadingCoktail/>:<Quote prop={strInstructions} props={strDrink}></Quote>
      }

      <button className="btn btn-primary" 
      disabled={isLoading}
      onClick={ () => increment()}>
        Next coctail
      </button>

      
    
    </>
   

  )
}
