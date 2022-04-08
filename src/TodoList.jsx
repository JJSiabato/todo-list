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
        
    }
    const deleteTodo = id =>{
        const deleteArr = [...todos].filter(items => items.id !== id);
        setTodos(deleteArr)
        console.log(deleteArr)
    }

    const completeTodo = id=>{
        let updated = todos.map((todo)=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updated)
    }
   return(
    <>
        <TodoForm onSubmit={addTodo}/>
        <Todo completeTodo={completeTodo} todos={todos} deleteTodo={deleteTodo}/>
    </>
   )
}

export default TodoList