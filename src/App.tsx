
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './store/hooks'
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const counter = useAppSelector((state) => state.taskList);
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = () => {

  };
  return (
    <>
      <button onClick={() => setShowForm((prev: boolean) => !prev)}>
        {showForm ? 'Cancel' : '+ Add another list'}
      </button >
      {showForm && (
        <Form onSubmit={handleSubmit} />
      )}
    </>
  )
}

export default App
