// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState, useReducer } from "react";

import { reducer, initialState } from '../reducers/TodoReducer';

import Todo from "./Todo"
// import Todo from "./Todo"

const TodoList = () => {
    // no way to get data from the reducer used in the form
    // const [todos, dispatch] = useReducer(reducer, initialState)
    console.log(todos)
    console.log("list to display", todos)
    return(

        <div>
            {todos.map((todo, i)=> (
                <Todo   key={todo.id}
                        name={todo.item}
                        // completed={todo.completed}
                        // updateTodo={this.props.updateTodo}
                        // i={i}
                        />

            ))}
        </div>
    )
    
}

export default TodoList;