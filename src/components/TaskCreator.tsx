import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addTask } from '../store/taskList/taskList.slice';
import { Dialog } from './Dialog/Dialog';
import { addTaskDialog } from '../store/ui/dialog.slice';

const TaskCreator = () => {
    const { addTask: dialog } = useAppSelector((state) => state.dialog) 
    const dispatch = useAppDispatch()
    const closeDialog = () =>  dispatch(addTaskDialog(false));

    const handleSubmit = (name: string, description:string) => {
        dispatch(addTask({name, description}))
        closeDialog();
    };

    return (
        <>
            <button onClick={() => dispatch(addTaskDialog(true))}>+ Add task</button>
            <Dialog title='Create a task' open={dialog.open} disabled={dialog.disabled} onSubmit={handleSubmit} onCancel={closeDialog}/> 
        </>
    )
};

export default TaskCreator;