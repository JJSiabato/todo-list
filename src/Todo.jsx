import {useState} from 'react'
import {TiEdit, TiDelete} from 'react-icons/ti'

const Todo = ({todos ,completeTodo, deleteTodo}) => {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })
  return( 
      <>
    {todos.map((todo, index)=>(
            <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
                <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                    {todo.text}
                    <div>
                        <TiEdit  onClick={()=>deleteTodo(todo.id)} className='icon'/>
                        <TiDelete onClick={()=>deleteTodo(todo.id)} className='icon'/>
                    </div>
                    </div>
            </div>
    ))
}
</>
    )
  
}

export default Todo