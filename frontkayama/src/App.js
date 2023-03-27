import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Componentes/Rutas/Landing/Landing';
import Nav from './Componentes/Nav/Nav';
import Catalogo from './Componentes/Rutas/Catalogo/Catalogo';
import Dojos from './Componentes/Rutas/Dojos/Dojos';
import Login from './Componentes/Rutas/Login/Login';
import Register from './Componentes/Rutas/Register/Register';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/productos' element={<Catalogo></Catalogo>} />
        <Route path='/dojos' element={<Dojos></Dojos>} />

        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
