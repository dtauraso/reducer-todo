import React from "react";

class Todo extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        console.log("todo", this.props.todo, this.props.todo.completed)
        return (
            <div className={`item${      this.props.todo.completed ? 'Completed': ''      }`}
                onClick={() => (this.props.updateTodo(this.props.i, this.props.todo))}>
                <p>{this.props.todo.item}</p>
            </div>
            // <div>
            //     <p>{this.props.todo.item}</p>
            // </div>

        )
    }
}

export default Todo;