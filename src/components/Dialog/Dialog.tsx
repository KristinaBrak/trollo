import React, {useState} from 'react';
import './dialog.css';

type DialogProps = {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const Dialog: React.FC<DialogProps> = ({ open , onOpen, onClose}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <dialog open={open} title='Create a task' >
            <h1>Create a task</h1>
            <form 
                method="dialog"
                onSubmit={onClose}
                onReset={onClose}
                >
                <div className='item'>
                    <p>name</p>
                    <input value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className='item'>
                    <p>description</p>
                    <textarea 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)} 
                    />
                </div>
                <div className='actions'>
                    <button type='submit'>save</button>
                    <button type="reset">cancel</button>
                </div>
            </form>
        </dialog>
    )
};

export default Dialog;