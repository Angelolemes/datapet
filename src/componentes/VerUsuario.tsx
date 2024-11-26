import { useNavigate } from "react-router-dom";
import  Eliminar  from '../componentes/Eliminar.tsx';
import  { useEffect, useState } from "react";
import { RegistroP } from "../types/log";
import axios from "../axios/axios.ts";
function VerUsuario() {

 
  const [data, setData] = useState<RegistroP[]>([]);
  const navigate = useNavigate();
  const ControlEliminar = async (idUsuario: string) => {
    try {await axios.delete(`/usuarios/${idUsuario}`);
      setData((prevData) => prevData.filter((usuario) => usuario.idUsuario !== idUsuario)); 
    } catch (error) {console.error("Error al eliminar usuario:", error);}};



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/usuarios");
        console.log("Datos recibidos:", res.data);
        setData(res.data);} catch (error) {console.log(error);}
      
      };fetchData();}, []);

      return (
     <div className="admin-interface bg-rosadito50 min-h-screen">  
     <div className="flex items-center justify-between w-full">
  <h1 className="text-2xl font-bold text-white flex-1 text-center border-b-2  pb-4 mb-7">Administración de Usuarios</h1>
  <button
    type="button"
    onClick={() => navigate("/admin")}
    className="bg-enesteestoy text-negro p-2 rounded hover:bg-blue-400 transition mt-4"
  >
    Volver
  </button>
</div>

      {data.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          
          {data.map((usuario: any) => (
          
          <div key={usuario.idUsuario} className="usuario-item p-4 mb-4 bg-rosadito200 text-white rounded-lg shadow-lg">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
           <div>
              <p><strong>Id:</strong> {usuario.idUsuario}</p>
              <p><strong>DNI:</strong> {usuario.DNI}</p>
              <p><strong>Telefono: </strong>{usuario.telefono}</p>
            
            </div>
            <div>
              <p><strong>Tipo: </strong>{usuario.tipoUsuario}</p>
              <p><strong>Nombre: </strong>{usuario.name}</p>
              <p><strong>Apellido: </strong>{usuario.apellido}</p>
              <p><strong>Contrasena:</strong> {usuario.password}</p>
              <p><strong>Correo:</strong> {usuario.correo}</p>
              
             
              </div>
            </div>
            <Eliminar persona={usuario} Eliminar={ControlEliminar} />
            </div>
          ))}
        </div>
      ) 
      : (
        <p className="text-center text-white">No hay usuarios registrados.</p>
      )}

    </div>

  
  );
}

export default VerUsuario