import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TaskList, TaskListsState } from './types';

export interface CounterState {
  value: number
}

const initialState: TaskListsState = {
  taskLists: [],
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TaskList>) => {
      state.taskLists = [...state.taskLists, action.payload];
    },
    remove: (state, action: PayloadAction<TaskList['id']>) => {
      state.taskLists = state.taskLists.filter((list) => list.id !== action.payload);
    }
  }
})

export const { add, remove } = taskListSlice.actions

export const { reducer: taskListReducer } = taskListSlice