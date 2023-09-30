import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './board.css';
import { remove } from '../../store/taskList/taskList.slice';

const Board: React.FC = () => {
    const { taskLists } = useAppSelector((state) => state.taskLists);
    const dispatch = useAppDispatch();

    return (
        <ul className='board'>
            {taskLists.map((list) => (<li className='taskListItem' id={list.id}><span>
                {list.title}</span>
                {!list.default && 
                    <button onClick={() => dispatch(remove(list.id))}>X</button>
                }
                </li>))}
        </ul>
    );
};

export default Board;