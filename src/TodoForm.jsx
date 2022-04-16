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
           { props.edit ? (
            <>
                <input 
                type="text" 
                placeholder='Update you task' 
                name='task' 
                value={input} 
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='todo-button edit'>Update</button>
            </>
            ) : (
            <>
            <input 
            type="text" 
            placeholder='Task' 
            name='task' 
            value={input} 
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'>Add task</button>
            </>
            )}
            
        </form>   
  )
}
export default TodoForm