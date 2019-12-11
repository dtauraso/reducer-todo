
export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about reducers 2',
        completed: false,
        id: 3892987588
    },
    {
        item: 'Learn about reducers 3',
        completed: true,
        id: 3892987587
    }
]


export const reducer = (state, action) => {
    // console.log("in reducer")
    // console.log(state, action);
    switch (action.type) {
        case 'ADD_TODO' :
            // console.log(state)
            return [
                ...state,

                {   item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
        case 'SET_COMPLETED' :
            // console.log(state, action.payload.i)
            return state.map((todo, i) => {
                    // console.log(i, ith)
        
                    if(i === action.payload) {
                        // console.log("updated todo", {...updatingTodo, completed: true})
                        return {...todo, completed: true}
                    } else {
                        return todo
                    }
                })
        case 'CLEAR_COMPLETED' :
            return action.payload.filter(todo => todo.completed === false)

    //   case 'UPDATE_TITLE':
    //     return {
    //       ...state,
    //       title: action.payload
    //     };
      // NEW CASE HERE
    //   case 'TOGGLE_EDIT':
    //     return {
    //       ...state,
    //       editing: !state.editing
    //     };
      default:
        return state;
    }
  };
  