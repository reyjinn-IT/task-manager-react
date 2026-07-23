import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import type { Task, TaskAction } from "../types/task";
import { taskReducer } from "../reducers/TaskReducer";

export interface TaskContextType{
    tasks: Task[]
    dispatch: Dispatch<TaskAction>
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export function TaskProvider({children} : {children : ReactNode}){
    const [tasks, dispatch] = useReducer(taskReducer,[])
    return(
        <TaskContext.Provider value={{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks(){
    const context = useContext(TaskContext)
    if (!context) throw new Error('useTasks must be used witihn TaskProvider')
        return context;
}