import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import AddPantient from './pages/AddPantient';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id_machine" element={<Detail/>}/>
        <Route path="/add" element={<AddPantient/>}/>
      </Routes>
  );
}

export default App;
