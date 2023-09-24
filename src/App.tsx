import './App.css'
import { useAppDispatch } from './store/hooks'
import { useState } from 'react';
import Form from './components/Form';
import Board from './components/Board/Board';

let value = 0;
const uuid = () => { value = value + 1; return value };

const App: React.FC = () => {
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

      <Board />
    </>
  );
};

export default App;
