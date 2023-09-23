import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task, TaskListState } from './types';

export interface CounterState {
  value: number
}

const initialState: TaskListState = {
  taskList: [],
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Task>) => {
      state.taskList = [...state.taskList, action.payload];
    },
  }
})

export const { add } = taskListSlice.actions

export const { reducer: taskListReducer } = taskListSlice