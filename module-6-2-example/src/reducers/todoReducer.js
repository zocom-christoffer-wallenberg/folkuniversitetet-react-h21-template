const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ALL_TODOS':
            return {
                ...state,
                todos: action.payload
            }
        case 'ADD_NEW_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        task: action.payload,
                        id: state.todos.length + 1
                    }
                ]
            }
        default:
            return state;
    }
}

export default todoReducer;