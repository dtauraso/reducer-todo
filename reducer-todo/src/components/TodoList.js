// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState, useReducer } from "react";

import { TodoReducer, initialState } from '../reducers/TodoReducer';

// import Todo from "./Todo"

const TodoList = () => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState)
    
    console.log("list to display")
    return(

        <div>
            {/* {this.props.todoList.map((todo, i)=> (
                <Todo   key={todo.id}
                        name={todo.name}
                        completed={todo.completed}
                        updateTodo={this.props.updateTodo}
                        i={i} />

            ))} */}
        </div>
    )
    
}

export default TodoList;