export type Task = {
    id: string,
    name: string,
    created: string,
}

export interface TaskListState {
    taskList: Task[];
}