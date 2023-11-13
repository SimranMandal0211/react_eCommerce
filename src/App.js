import './App.css';
import { Route, Routes } from "react-router-dom";
import Navigation from "./Pages/navigation/navigation.component";
import Home from "./Pages/home/home.component";
import AddProd from './Pages/addProduct/addProduct.component';
import HomeComponent from './components/home-component/home.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='addProd' element={<AddProd />} />
          <Route path='allProds' element={<HomeComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
