import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task, TaskList, TaskListsState } from './types';
import { backlogId } from '../constants';
import { getDate, getId } from './helpers';

export interface CounterState {
  value: number
}

const initialState: TaskListsState = {
  taskLists: [
    {
      id: backlogId,
      title: 'Backlog', 
      default: true, 
      created:  getDate(),
      tasks: []
    }
  ],
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TaskList['title']>) => {
      const id = getId();
      const created = getDate();
      const tasks: Task[] = [];
      const taskList = {id, created, tasks, title: action.payload};

      state.taskLists = [...state.taskLists, taskList];
    },
    remove: (state, action: PayloadAction<TaskList['id']>) => {
      state.taskLists = state.taskLists.filter((list) => list.id !== action.payload);
    },
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'created'>>) => {
      const created = getDate();
      const id = getId()

      state.taskLists = state.taskLists.map((list) => {
        if(list.id === backlogId){
          list.tasks = [...list.tasks, { id, created, ...action.payload}]
        }
        return list;
      })
    }
  }
})

export const { add, remove, addTask } = taskListSlice.actions

export const { reducer: taskListReducer } = taskListSlice