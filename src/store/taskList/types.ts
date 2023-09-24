export type TaskList = {
    id: string,
    title: string,
    created: string,
}

export interface TaskListsState {
    taskLists: TaskList[];
}
