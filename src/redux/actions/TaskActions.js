import { COMPLETE_TASK, DELETE_TASK, LOAD_TASK } from "./TaskActionsTypes"


export function loadTaks(tasks) {
    return{
        type: LOAD_TASK,
        payload: tasks
    }
}

export function deleteTask(id) {
    return{
        type: DELETE_TASK,
        payload: id
    }
}

export function completeTask(id) {
    return{
        type: COMPLETE_TASK,
        payload: id
    }
}