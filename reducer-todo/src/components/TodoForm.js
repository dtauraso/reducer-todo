import React, { useState, useReducer } from "react";

import { reducer, initialState } from '../reducers/TodoReducer';
// import TodoList from '../components/TodoList';
import Todo from "./Todo"

const TodoForm = () => {
   
    const [todos, dispatch] = useReducer(reducer, initialState)

    const [newTodo, setNewTodo] = useState('')


    const updateTodo = (ith, updatingTodo) => {
        // console.log("updating todo", ith)
       
        // make a dispatch
        dispatch({
            type: 'SET_COMPLETED',
            payload: ith
        })
        // console.log(x)
    }

    const handleTitleChanges = changeEvent => {
        // update state with each keystroke
        // console.log(changeEvent.target.value)
        setNewTodo(changeEvent.target.value)
        // this.setState({newTodo: changeEvent.target.value})

    }

    // class property to submit form
    const handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        console.log("submitting")
        console.log(newTodo)
        // already filled from handleFormChanges
        console.log("got here")
        console.log(newTodo, todos)
        // this.props.addTodo(this.state.newTodo)
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
        // console.log(todos)
        // reset data form prepopulates with
        setNewTodo('')

        // this.setState({
        //     newTodo: ""
        // })

    }

    const clearCompleted = () => {

        dispatch({
            type: 'CLEAR_COMPLETED',
            payload: todos
        })

        // this.setState({todos: [...this.state.todos.filter(todo => todo.completed === false)]    })
    
      }
    
    return (
        <div>
            {todos.map((todo, i)=> (
                <Todo   key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        // completed={todo.completed}
                        // updateTodo={this.props.updateTodo}
                        i={i}
                        />

            ))}

            <form onSubmit={handleFormSubmit}>
                <input
                    value = {newTodo}
                    onChange={handleTitleChanges}
                    type="text"
                    name="todo"
                ></input>
                <button>Add</button>
                <button onClick={clearCompleted}>Clear Completed</button>

            </form>
        </div>
        
        

    )

}

export default TodoForm;