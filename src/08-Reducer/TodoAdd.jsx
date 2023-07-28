import {useForm} from '../hook/useForm'

export const TodoAdd = ({onNewTodo}) => {

const {descripcion, inputonChange, onResetForm} = useForm({

  descripcion:''

})  

const onFormSubmit = (event) =>{

  event.preventDefault();

  if(descripcion.length <= 1  ) return;

  const newTodo = {
    id: new Date().getTime() * 3 ,
    descripcion: descripcion,
    done:false
  }

  onNewTodo(newTodo)
  onResetForm()

}

  return (
    <>
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            placeholder="¿Que hay que hacer?"
            className="form-control"
            value={descripcion}
            name='descripcion'
            onChange={inputonChange}
         />
        <button type="submit" className="btn btn-primary mt-2">
            Agregar Todo
        </button>
    </form>
    </>
  )
}
