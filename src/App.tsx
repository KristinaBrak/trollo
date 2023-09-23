
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './store/hooks'
import { decrement, increment, incrementByAmount } from './store/taskList/taskList.slice';

function App() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Add
        </button>
        <button onClick={() => dispatch(decrement())}>
          Remove
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Add 5
        </button>
        <div>Result: {counter.value}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
