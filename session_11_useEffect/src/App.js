import { useState, useEffect } from 'react'
import Login from './components/Login/Login'
import Home from './components/Home/index'
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedLoggedInfo = localStorage.getItem('isLoggedIn')

    if (storedLoggedInfo === '1') {
      setIsLoggedIn(true)
    }

  }, []);

  const onLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  const handleLoginSubmit = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', '1')
  }

  return (
    <div className="App">
      {isLoggedIn ? <Home onLogout={onLogout} /> : <Login onSubmit={handleLoginSubmit} />}

    </div>
  );
}

export default App;
