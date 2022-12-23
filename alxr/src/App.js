import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login';
import { Location } from './pages/Location';
import { Categories } from './pages/Categories';
import {Routes, Route} from "react-router-dom"
import { Private } from './components/Private';


function App() {
  return (
    <div className="App">
     
      {/* <Login></Login>
       <Location/> */}
       {/* <Categories/> */}
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Private><Categories/></Private>}></Route>
        <Route path="/location" element={<Private><Location/></Private>}></Route>
      </Routes>
    </div>
  );
}

export default App;
