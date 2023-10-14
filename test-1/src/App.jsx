// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Q2 from './Components/Q2';
import Q1 from './Components/Q1';
import Register from './Components/Q3Register';
import MultiProduct from './Components/Q4MultiProduct';
import SingleProduct from './Components/Q4SingleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/todo" element={<Q1/>}/>
        <Route path="/q2" element={<Q2/>}/>
        <Route path="/register" element={<Register/>}/>        
        <Route path="/multi-product" element={<MultiProduct/>}/>    
        <Route path="/single-product/:id" element={<SingleProduct/>}/>    
      </Routes>
    </div>
  );
}

export default App;
