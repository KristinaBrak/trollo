import React, {useState} from 'react';
import Dialog from './Dialog';
import { useAppDispatch } from '../store/hooks';
import { addTask } from '../store/taskList/taskList.slice';

const TaskCreator = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch()

    const closeModal = () => setShowModal(false);

    const handleSubmit = (name: string, description:string) => {
        dispatch(addTask({name, description}))
        closeModal();
    };


    return (
        <>
            <button onClick={() => setShowModal(true)}>+ Add task</button>
            <Dialog open={showModal} onSubmit={handleSubmit} onCancel={closeModal}/> 
        </>
    )
};

export default TaskCreator;