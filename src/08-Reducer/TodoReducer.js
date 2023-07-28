

export const TodoReducer = (initalState = [], action) => {


  switch (action.type) {
    case '[TODO] ADD todo':
        
        return [...initalState, action.payload]

    case '[TODO] DELETE todo':
        
        return initalState.filter( todo => todo.id !== action.payload );
      
    case '[TODO] COMPLETE todo':
        
        return initalState.map(todo => {

          if(todo.id === action.payload){
           
            return{

              ...todo,
              done : !todo.done

            }

          }


          return todo
        })

    default:
        return initalState
  }
}
