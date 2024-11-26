import { useNavigate } from "react-router-dom";
import Eliminar from '../componentes/Eliminar.tsx';
import  { useEffect, useState } from "react";
import { RegistroAnimal } from "../types/log";
import axios from "../axios/axios.ts";
function VerAnimales() {
  const navigate = useNavigate();
    const [data, setData] = useState<RegistroAnimal[]>([]);
    const handleEliminar = async (idMascota: string) => {
      try {
        await axios.delete(`/mascotas/${idMascota}`);
        setData((prevData) => prevData.filter((Mascota) => Mascota.idMascota !== idMascota)); 
      } catch (error) {
        console.error("Error al eliminar mascotas:", error);
      }
    };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get("/mascotas");
          console.log("Datos recibidos:", res.data);
          setData(res.data);} catch (error) {console.log(error);}
        
        };fetchData();}, []);
  
  return (
    <div className="admin-interface bg-rosadito50 min-h-screen"> 
    <div className="flex items-center justify-between w-full">
  <h1 className="text-2xl font-bold text-white flex-1 text-center border-b-2  pb-4 mb-7">Administración de Animales</h1>
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
        
        {data.map((Mascota: any) => (
        
        <div key={Mascota.idMascota} className="usuario-item p-4 mb-4 bg-rosadito200 text-white rounded-lg shadow-lg">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <p><strong>Id Salud:</strong> {Mascota.idSalud}</p>
                  <p><strong>Id Mascota:</strong> {Mascota.idMascota}</p>
                  <p><strong>Tipo:</strong> {Mascota.tipo}</p>
                  <p><strong>Raza:</strong> {Mascota.raza}</p>
                </div>
                
                <div>
                  <p><strong>Nombre:</strong> {Mascota.nombre}</p>
                  <p><strong>Edad:</strong> {Mascota.edad} años</p>
                  <p><strong>Peso:</strong> {Mascota.peso} kg</p>
                  <p><strong>Alergias:</strong> {Mascota.alergias}</p>
                  <p><strong>Descripción:</strong> {Mascota.descripcion}</p>
                </div>
              </div>
           
           
            <Eliminar animal={Mascota} Eliminar={handleEliminar} />
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
export default VerAnimales