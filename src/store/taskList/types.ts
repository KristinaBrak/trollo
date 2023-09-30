export type TaskList = {
    id: string;
    title: string;
    created: string;
    default?: boolean;
}

export interface TaskListsState {
    taskLists: TaskList[];
}
