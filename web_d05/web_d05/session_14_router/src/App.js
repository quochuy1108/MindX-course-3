import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Products from "./Products";
import NavBar from "./NavBar";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import AboutUs, { Member, Contact, Address } from "./AboutUs";
import Login from "./Login";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        navigate("/login");
      }
      setLoading(false);
    }, 2000);
  }, [navigate]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading ...
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <hr />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="members" element={<Member />} />
          <Route path="contact" element={<Contact />} />
          <Route path="address" element={<Address />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
// http://www.myapp.com/home => Home component
// http://www.myapp.com/product => Product component
