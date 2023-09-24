import './App.css'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { useState } from 'react';
import Form from './components/Form';

let value = 0;
const uuid = () => { value = value + 1; return value };

function App() {
  const { taskLists } = useAppSelector((state) => state.taskLists);
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (title: string) => {
    setShowForm(false);
    dispatch({
      type: 'taskList/add',
      payload: {
        id: uuid(),
        title,
        created: new Date().toUTCString(),
      }
    });
  };

  return (
    <>
      {showForm ?
        <Form onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />
        : <button onClick={() => setShowForm((prev) => !prev)}>
          + Add another list
        </button >
      }
      {taskLists.map((list) => (<div id={list.id}>{list.title}</div>))}
    </>
  );
};

export default App;
