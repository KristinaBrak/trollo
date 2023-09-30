import React, {useState} from 'react';
import Dialog from './Dialog';

const TaskCreator = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>+ Add task</button>
            <Dialog open={showModal} onOpen={() => {}} onClose={() => setShowModal(false)}/> 
        </>
    )
};

export default TaskCreator;