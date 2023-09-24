import React from 'react';
import { useAppSelector } from '../../store/hooks';
import './board.css';

const Board: React.FC = () => {
    const { taskLists } = useAppSelector((state) => state.taskLists);

    return (
        <ul className='board'>
            {taskLists.map((list) => (<li id={list.id}>{list.title}</li>))}
        </ul>
    );
};

export default Board;