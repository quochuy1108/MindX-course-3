import { useState, useEffect, useCallback } from 'react'
import ChildComponent from './ChildComponent'

function App() {
  const [visible, setVisible] = useState(false)

  const handleVisibleChange = () => {
    setVisible(!visible)
  }

  console.log('Running APp');

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <div>Optimization</div>
      <button onClick={handleVisibleChange}>Toggle visible</button>
      <h1>Hello there</h1>
      {visible ? <p>This is hidden part </p> : null}
      <ChildComponent visible={visible} />
    </div>
  );
}

export default App;
