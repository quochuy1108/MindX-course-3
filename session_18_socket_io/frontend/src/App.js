import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Game from './components/Game'
function App() {
  const [userName, setUserName] = useState('')

  const getUserName = (userName) => {
    setUserName(userName)
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/welcome' element={<Welcome getUserName={getUserName} />} />
        <Route path='/' element={<Home user={userName} />} />
        <Route path='/:id' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
