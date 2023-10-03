
export interface Task {
    id: string;
    name: string;
    description: string;
    created: string;
}

export type TaskList = {
    id: string;
    title: string;
    created: string;
    default?: boolean;
    tasks: Task[];
}

export interface TaskListsState {
    taskLists: TaskList[];
}
