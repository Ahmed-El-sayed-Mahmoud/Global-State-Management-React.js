
import './App.css';
import MainPage from './MainPage';
import { ShopContext } from './ShopContext';
import { shopData } from "./Data";
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ShopContext>
      
     
     <BrowserRouter>
  <Routes>
  <Route path='/home'element={<MainPage products={shopData}/>}></Route>
  <Route path='/cart'element={<Cart/>}></Route>
  </Routes>
</BrowserRouter>
</ShopContext> 
    </div>
  );
}

export default App;
