import './App.css'
import { useAppDispatch } from './store/hooks'
import { useState } from 'react';
import Form from './components/Form';
import Board from './components/Board/Board';
import { add } from './store/taskList/taskList.slice';
import { uuid } from './generator'

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (title: string) => {
    setShowForm(false);
    dispatch(add({
      id: String(uuid()),
      title,
      created: new Date().toISOString(),
    }));
  };

  return (
    <>
      {showForm ?
        <Form onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />
        : <button onClick={() => setShowForm((prev) => !prev)}>
          + Add list
        </button >
      }

      <Board />
    </>
  );
};

export default App;
