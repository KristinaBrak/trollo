import React, { useState } from "react";

type FormProps = {
    onSubmit: (value: any) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <button type="submit">Create</button>
        </form>
    )
};

export default Form