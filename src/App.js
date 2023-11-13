import './App.css';
import { Route, Routes } from "react-router-dom";

import Navigation from "./Pages/navigation/navigation.component";
import Home from "./Pages/home/home.component";
import AddProd from './Pages/addProduct/addProduct.component';

import HomeComponent from './components/home-component/home.component';
import Cart from './Pages/cart/cart.component';
import ProductDetail from './components/product-detail/product-detail.component';

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='addProd' element={<AddProd />} />
          <Route path='cart' element={<Cart />} />
          <Route path='allProds' element={<HomeComponent />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>


      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
