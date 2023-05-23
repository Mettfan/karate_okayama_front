import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Componentes/Rutas/Landing/Landing';
import Nav from './Componentes/Nav/Nav';
import Catalogo from './Componentes/Rutas/Catalogo/Catalogo';
import Dojos from './Componentes/Rutas/Dojos/Dojos';
import Login from './Componentes/Rutas/Login/Login';
import Register from './Componentes/Rutas/Register/Register';
import Footer from './Componentes/Tools/Footer/Footer';
import UserDetail from './Componentes/Rutas/UserDetail/UserDetail';
import Informacion from './Componentes/Rutas/Informacion/Informacion';

function App() {
  return (<>
    <div className="App">
        <Nav />
       <Routes>
        <Route path='/' element={<Landing></Landing>} />
        <Route path='/productos' element={<Catalogo></Catalogo>} />
        <Route path='/dojos' element={<Dojos></Dojos>} />

        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        
        <Route path='/user/:id' element={<UserDetail></UserDetail>} />
        
        <Route path='/información' element={<Informacion></Informacion>} />
      </Routes>
        <Footer></Footer>
    </div>
  
  
  </>
  );
}

export default App;
