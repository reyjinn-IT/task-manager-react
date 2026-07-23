import type { Task,TaskAction } from "../types/task";

export function taskReducer(state: Task[], action: TaskAction){
    switch(action.type){
        case 'ADD':
            return[...state, {id:Date.now(), text : action.payload, done:false}]
        case 'TOGGLE':
            return state.map(task => task.id === action.payload ? {...task, done: !task.done}: task)
        case 'DELETE':
            return state.filter(task => task.id !== action.payload)
        default:
            return state
    }
}