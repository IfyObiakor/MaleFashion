import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import CheckOut from './Components/CheckOut';
import ContactUs from './Components/ContactUs';
import Countdown from './Components/Countdown';
import HomePage from './Components/HomePage';
import Shop from './Components/Shop';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shoppingcart" element={<ShoppingCart />} />
      <Route exact path="/checkout" element={<CheckOut />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/countdown" element={<Countdown />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
