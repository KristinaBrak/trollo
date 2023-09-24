import React, { useState } from "react";

type FormProps = {
    onSubmit: (value: string) => void;
    onCancel: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    return (
        <form onSubmit={() => onSubmit(name)} onReset={onCancel}>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <button type="submit">Create</button>
            <button type="reset">Cancel</button>
        </form>
    )
};

export default Form