import { useState } from 'react'
import cursorIcon from './assets/cursor.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="../README.md" target="_blank">
          <img src={cursorIcon} className="logo" alt="cursor" />
        </a>
      </div>
      <h1>CURSORUN</h1>
      <h3>(Beta in development)</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Spam clicks! {count}
        </button>
        <p>
          Train your cursor with <code><a href="https://doodles.google/doodle/halloween-2024/">this game.</a></code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the cursor to learn more
      </p>
    </>
  )
}

export default App
