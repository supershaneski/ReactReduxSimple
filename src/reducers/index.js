import { ADD_TASK, DELETE_TASK } from '../actions/actionTypes.js';

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
        case DELETE_TASK:
            return deleteTask(action.index, state)
        case ADD_TASK:
            return addTask(action, state)
        default:
            return state;
    }
}

export default todos;