//import LandingPage from "./interfaz/LandingPage";
import LoginForm from "./interfaz/LoginForm";
import RegistroForm from "./interfaz/RegistroForm";
import InterfazAdmin from "./interfaz/InterfazAdmin";
import RegistroAnimales from "./interfaz/RegistroAnimales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerUsuario from "./componentes/VerUsuario";
import VerAnimales from "./componentes/VerAnimales";
import Metricas from "./interfaz/Metricas";
import LoginRomina from "./IR/LoginRomina";
import PGC from "./IR/PGC"
import VistaPrin from "./IR/VistaPrin";
import Registro from "./IR/Registro";
import VentasPorMes from "./IR/Ventas";


function App() {
 

  return (
    <>
     

    <Router>
  <Routes>
    
    <Route path="/login" element={<LoginForm/>} />
    <Route path="/registro" element={<RegistroForm />} />
    <Route path="/registroAnimales" element={<RegistroAnimales />} />
    <Route path="/verAnimales" element={<VerAnimales />} />
    <Route path="/verUsuario" element={<VerUsuario />} />
    <Route path="/admin" element={<InterfazAdmin />} />
    <Route path="/metricas" element={<Metricas />} />

    <Route path="/" element={<LoginRomina/>} />
    <Route path="/pgc" element={<PGC />} />
    <Route path="/vp" element={<VistaPrin />} />
    <Route path="/rg" element={<Registro />} />
    <Route path="/ventas" element={<VentasPorMes />} />
  </Routes>
</Router>
    </>
  )
}

export default App
