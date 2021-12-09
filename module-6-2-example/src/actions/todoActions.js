export const addAllTodos = (todos) => {
    return {
        type: 'ADD_ALL_TODOS',
        payload: todos
    }
}

export const addNewTodo = (todo) => {
    return {
        type: 'ADD_NEW_TODO',
        payload: todo
    }
}