import { ADD_TASK, DELETE_TASK, FETCH_TASK } from './actionTypes.js';

let counter = 0;

export default function addTask(text){
    return (
        {
            type: ADD_TASK,
            id: counter++,
            text: text
        }
    )
}

export function deleteTask(index){
    return (
        {
            type: DELETE_TASK,
            index: index
        }
    )
}

export const fetchTasks = () => ({
    type: FETCH_TASK
})
