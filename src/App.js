import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import CheckOut from './pages/CheckOut';
import ContactUs from './pages/ContactUs';
import Countdown from './Components/Countdown';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';
import Footer from './Components/Footer';
import { useState } from 'react';
import Signin from './pages/Signin';

function App() {

  // const [cart , setCart] = useState("")

  // const handleClick = () => {
      
  //     console.log("hello")
  // }

  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shoppingcart" element={<ShoppingCart />} />
      <Route exact path="/checkout" element={<CheckOut />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/countdown" element={<Countdown />} />
      <Route exact path="/signin" element={<Signin />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
