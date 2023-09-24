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
  }
})

export const { add } = taskListSlice.actions

export const { reducer: taskListReducer } = taskListSlice