let counter = 0;

export default function addTask(text){
    return (
        {
            type: 'ADD',
            id: counter++,
            text: text
        }
    )
}

export function deleteTask(index){
    return (
        {
            type: 'DELETE',
            index: index
        }
    )
}

export const fetchTasks = () => ({
    type: 'FETCH',
    text: 'DATA'
})