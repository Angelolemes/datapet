import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Venta {
  idventas: number;
  cliente: string;
  meses: number;
}

const VentasPorMes: React.FC = () => {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await axios.get('/gdv'); 
        console.log('Datos de ventas:', response.data); 
        setVentas(response.data);
      } catch (error) {
        console.error('Error al obtener las ventas:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchVentas();
  }, []);
  

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ventas por Mes</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">ID Venta</th>
            <th className="px-4 py-2 border-b">Cliente</th>
            <th className="px-4 py-2 border-b">Mes</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr key={venta.idventas}>
              <td className="px-4 py-2 border-b">{venta.idventas}</td>
              <td className="px-4 py-2 border-b">{venta.cliente}</td>
              <td className="px-4 py-2 border-b">{venta.meses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentasPorMes;
