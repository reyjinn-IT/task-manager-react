export interface Task{
    id : number
    text : string
    done: boolean
}

export type TaskAction = 
    | {type:'ADD' ,payload:string}
    | {type:'TOGGLE' ,payload:number}
    | {type:'DELETE' ,payload:number}