import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './board.css';
import { remove } from '../../store/taskList/taskList.slice';
import { previewTaskDialog } from '../../store/ui/dialog.slice';
import { Dialog } from '../Dialog/Dialog';
import { Task } from '../../store/taskList/types';

const Board: React.FC = () => {
    const { taskLists } = useAppSelector((state) => state.taskLists);
    const dispatch = useAppDispatch();
    const { previewTask: dialog } = useAppSelector((state) => state.dialog);

    const previewTask = (task: Task) => {
        console.log(task)
        dispatch(previewTaskDialog({
            open: true, 
            name: task.name, 
            description: task.description
        }));
    };

    const onDialogClose = () => {
        dispatch(previewTaskDialog({open: false}));
    }

    return (
        <>
            <ul className='board'>
                {taskLists.map((list) => (
                    <li className='taskListItem' key={list.id}>
                        <div id={list.id}>
                            <div className="heading">
                                <span>{list.title}</span>
                                {!list.default &&
                                    <button onClick={() => dispatch(remove(list.id))}>X</button>
                                }
                            </div>
                        </div>
                        <ul>
                            {list.tasks.map((task) => (
                                <li key={task.id} onClick={() => previewTask(task)}>{task.name}</li>
                            ))}
                        </ul>
                    </li>)
                )}
            </ul>
            <Dialog title='Preview a task' open={dialog.open} disabled={dialog.disabled} onCancel={onDialogClose} onSubmit={()=>{}}/> 
        </>
    );
};

export default Board;