import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home'
import Product from './Product'
import NavBar from './NavBar'
import ProductDetail from './ProductDetail'
import NotFound from './NotFound'
import Login from './Login'
import AboutUs, { Members, Contact, Address } from './AboutUs'
import { useState, useEffect } from 'react'

function App() {

  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      if (!isLoggedIn) {
        navigate('/login')
      }
      setLoading(false)
    }, 2000)
  }, []);

  if (loading) {
    return <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
      Loading ...
     </div>
  }

  return (
    <div className="App">
      <NavBar />
      <hr />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/about-us' element={<AboutUs />} >
          <Route path='members' element={<Members />} />
          <Route path='contact' element={<Contact />} />
          <Route path='address' element={<Address />} />
        </Route>
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
