import { COMPLETE_TASK, DELETE_TASK, LOAD_TASK } from "../actions/TaskActionsTypes"

const initState = {
    tasks : []
}


export default function taskReducer(state = initState, action) {
    switch(action.type) {
        case LOAD_TASK:
            return {...state, tasks: action.payload}
        case DELETE_TASK:
            return{...state, tasks: state.tasks.map(oneTask => oneTask.id === action.payload 
                ? {...oneTask, removed: true}
                : oneTask)}
        case COMPLETE_TASK:
            return{...state, tasks: state.tasks.map(oneTask => oneTask.id === action.payload 
                ? {...oneTask, completed: !oneTask.completed}
                : oneTask)}        
        default:
            return state
    }
}