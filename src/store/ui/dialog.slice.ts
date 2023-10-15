import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../taskList/types';


export interface DialogState {
    open: boolean;
    disabled?: boolean;
}


type DialogType = 'addTask' | 'previewTask';

type TaskDetails = {
  name: Task['name'],
  description: Task['description'],
};

type Dialogs = {
  addTask: DialogState,
  previewTask: DialogState & TaskDetails,
}

const initialState: Dialogs = {
  addTask: {
    open: false,
    disabled: false,
  },
  previewTask: {
    open: false,
    disabled: true,
    name: '',
    description: ''
  },
};


export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers:{
    addTask: (state, action: PayloadAction<boolean>) => {
      state.addTask.open = action.payload;
    },
    previewTask: (state, action: PayloadAction<{open: boolean, name?: string, description?: string}>) => {
      state.previewTask.open = action.payload.open;
      state.previewTask.name = action.payload.name || '';
      state.previewTask.description = action.payload.description || '';
    }
  }
});

export const { addTask: addTaskDialog, previewTask: previewTaskDialog } = dialogSlice.actions;

export const { reducer: dialogReducer } = dialogSlice;