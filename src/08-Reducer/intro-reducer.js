
const initialState = [{

    id: 1,
    todo: 'Arreglar el cuarto',
    done: false,



}]

const todoReducer = (state = initialState, action = {}) => {

    if(action.type === '[TODO] Add todo'){

        return [...state, action.payload]

    }

    return state;
}

let todo = todoReducer()

const newTodo = 
    {
        id: 2,
        todo: 'recoger popo de jacky',
        fonr: false
    }

const addTodoAccion = 
    {
        type: '[TODO] Add todo' ,
        payload : newTodo
    }


todo = todoReducer(todo, addTodoAccion)

console.log({state: todo})

