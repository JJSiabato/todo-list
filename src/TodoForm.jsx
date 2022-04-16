import {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit ({
            id: Date.now(),
            text: input
        }); 
        setInput('')               
    } 
    
    const handleChange = (e)=>{
        setInput(e.target.value)
    }

  return (
        <form className='todo-form' onSubmit={handleSubmit}>            
                <input 
                type="text" 
                placeholder={props.edit ? 'Update you task' : 'Add task'} 
                name='task' 
                value={input} 
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='todo-button edit' onClick={handleSubmit}>{props.edit ? "update" : "add"}</button>                             
        </form> 
  )
}
export default TodoForm