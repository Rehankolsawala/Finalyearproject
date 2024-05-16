
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/card';
import LoginSignUp from './Pages/LoginSignUP';
import Footer from './Components/Footer/Footer';
import coffee_banner from './Components/Assests/Coffebanneravif.avif'
import snacks_banner from './Components/Assests/Coffebanneravif.avif'
import menu_banner from './Components/Assests/Coffebanneravif.avif'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Coffee' element={<Shopcategory banner={coffee_banner} category="Coffee" />} />
          <Route path='/Snacks' element={<Shopcategory banner={snacks_banner} category="Snacks" />} />
          <Route path='/menu' element={<Shopcategory banner={ menu_banner} category="Desert" />} />
          <Route path='/Product' element={<Product />}>
            <Route path=':productID' element={<product />} />
          </Route>

          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<LoginSignUp />} />
          
                
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
