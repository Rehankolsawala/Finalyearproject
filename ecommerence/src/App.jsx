
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/card';
import LoginSignUp from './Pages/LoginSignUP';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Coffee' element={<Shopcategory banner={men_banner} category="Coffee" />} />
          <Route path='/Snacks' element={<Shopcategory banner={women_banner} category="Snacks" />} />
          <Route path='/menu' element={<Shopcategory banner={kid_banner} category="Desert" />} />
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
