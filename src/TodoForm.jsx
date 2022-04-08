import {useState} from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState('');

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
    <div>

        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Task' 
            name='task' 
            value={input} 
            className='todo-input'
            onChange={handleChange}
            />
            <button className='todo-btn'>add</button>
        </form>
    </div>
  )
}
export default TodoForm