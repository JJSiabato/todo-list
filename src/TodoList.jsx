import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodo = [todo, ...todos];
        setTodos(newTodo)        
    };
    const deleteTodo = id => {
        const deleteArr = [...todos].filter(todo => todo.id !== id)
        setTodos(deleteArr);
        
    };
    
    const updateTodo = (todoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }        
        setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)))
    }
    const completeTodo = id => {
        let updated = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updated)
    }
   return(
    <>
        <h1>TASK CONTROL</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos} 
        deleteTodo={deleteTodo}  
        completeTodo={completeTodo}
        updateTodo={updateTodo}/>
    </>
   )
}

export default TodoList