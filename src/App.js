import './App.css';
import { Route, Routes } from "react-router-dom";
import Navigation from "./Pages/navigation/navigation.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
