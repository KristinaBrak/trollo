import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './board.css';
import { remove } from '../../store/taskList/taskList.slice';

const Board: React.FC = () => {
    const { taskLists } = useAppSelector((state) => state.taskLists);
    const dispatch = useAppDispatch();

    return (
        <div className='board'>
            {taskLists.map((list) => (
                <div className='taskListItem' id={list.id}>
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
                            <li id={task.id}>{task.name}</li>
                        ))}
                    </ul>
                </div>)
            )}
        </div>
    );
};

export default Board;