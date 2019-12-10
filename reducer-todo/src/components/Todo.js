import React from "react";

class Todo extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        console.log("todo", this.props, this.props.completed)
        return (
            // <div className={`item${      this.props.completed ? 'Completed': ''      }`}
            //     onClick={() => (this.props.updateTodo(this.props.i))}>
            //     <p>{this.props.name}</p>
            // </div>
            <div>
                <p>{this.props.name}</p>
            </div>

        )
    }
}

export default Todo;