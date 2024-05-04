interface MainTaskInitial {
    title: string
    description: string
    due_date: Date
    status: Status
    board_id: number
}

interface MainTask extends MainTaskInitial {
    id: number
    subtasks: SubTask[]

}
export interface SubTaskInitial {
    title: string
    description: string
    due_date?: Date
    status: Status
    main_task_id: number

}
export interface SubTask extends SubTaskInitial {
    id: number
    assignee: string
    assigned_date: Date
    completed_date: Date
}

type Status = "todo" | "in-progress" | "done"