const addTask = (action, state) => {
    const newtodo = {
        id: action.id,
        text: action.text
    }
    return state.concat([newtodo])
}

const deleteTask = (index, state) => {
    delete state[index]
    return state;
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return deleteTask(action.index, state)
        case 'ADD':
            return addTask(action, state)
        default:
            return state;
    }
}

export default todos;