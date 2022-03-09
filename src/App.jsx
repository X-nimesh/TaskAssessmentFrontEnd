import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <p>
        <button
          className='btnplus'
          type='button'
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        {count}
        <button
          className='btnminus'
          type='button'
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
      </p>
      <button className='btnreset' type='button' onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
