import  { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart'; // Suponiendo que usas @mui/x-charts
import { pieArcLabelClasses } from '@mui/x-charts/PieChart';
import axios from "../axios/axios.ts";

const Metricas = () => {
  const [data, setData] = useState<any[]>([]); // Para almacenar todos los datos de las mascotas
  const [perros, setPerros] = useState<any[]>([]); // Para almacenar solo los perros
  const [gatos, setGatos] = useState<any[]>([]); // Para almacenar solo los gatos
  const [razasPerros, setRazasPerros] = useState<any>([]); // Razas por perro
  const [razasGatos, setRazasGatos] = useState<any>([]); // Razas por gato

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/mascotas"); // Traemos todas las mascotas
        console.log("Datos recibidos:", res.data);
        setData(res.data);

        // Filtramos por tipo
        const perros = res.data.filter((mascota: any) => mascota.tipo === "Perro");
        const gatos = res.data.filter((mascota: any) => mascota.tipo === "Gato");

        // Filtramos razas para perros y gatos
        const razasPerros = perros.reduce((acc: any, perro: any) => {
          if (acc[perro.raza]) {
            acc[perro.raza] += 1;
          } else {
            acc[perro.raza] = 1;
          }
          return acc;
        }, {});

        const razasGatos = gatos.reduce((acc: any, gato: any) => {
          if (acc[gato.raza]) {
            acc[gato.raza] += 1;
          } else {
            acc[gato.raza] = 1;
          }
          return acc;
        }, {});

        // Actualizamos los estados
        setPerros(perros);
        setGatos(gatos);
        setRazasPerros(razasPerros);
        setRazasGatos(razasGatos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) return <div>Cargando...</div>; // Mientras se cargan los datos

  // Calculamos el total de mascotas y las razas
  const totalPerros = perros.length;
  const totalGatos = gatos.length;
  const totalOtros = data.length - totalPerros - totalGatos;

  // Función para calcular el porcentaje
  const calcularPorcentaje = (valor: number, total: number) => ((valor / total) * 100).toFixed(2);

  return (
    <div>
      <h1>Metricas de Mascotas por Tipo</h1>
      
      {/* Gráfico para perros, gatos y otros */}
      <div style={{ height: '300px' }}> {/* Establecemos una altura para el gráfico */}
        <PieChart
          series={[{
            data: [
              { label: 'Perros', value: totalPerros },
              { label: 'Gatos', value: totalGatos },
              { label: 'Otros', value: totalOtros },
            ],
            arcLabel: (item) => `${item.label}: ${calcularPorcentaje(item.value, data.length)}%`, // Mostramos el porcentaje en la etiqueta
            arcLabelMinAngle: 35,
            arcLabelRadius: '60%',
          }]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fontWeight: 'bold',
            },
          }}
        />
      </div>
      
      {/* Gráfico para razas de perros */}
      <h2>Razas de Perros</h2>
      <div style={{ height: '300px' }}>
        <PieChart
          series={[{
            data: Object.entries(razasPerros).map(([raza, count]) => ({
              label: raza,  // Mostramos la raza como etiqueta
              value: count as number,
            })),
            arcLabel: (item) => `${item.label}: ${calcularPorcentaje(item.value, totalPerros)}%`, // Mostramos la raza y el porcentaje
            arcLabelMinAngle: 35,
            arcLabelRadius: '60%',
          }]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fontWeight: 'bold',
            },
          }}
        />
      </div>
      
      {/* Gráfico para razas de gatos */}
      <h2>Razas de Gatos</h2>
      <div style={{ height: '300px' }}>
        <PieChart
          series={[{
            data: Object.entries(razasGatos).map(([raza, count]) => ({
              label: raza, // Mostramos la raza como etiqueta
              value: count as number,
            })),
            arcLabel: (item) => `${item.label}: ${calcularPorcentaje(item.value, totalGatos)}%`, // Mostramos la raza y el porcentaje
            arcLabelMinAngle: 35,
            arcLabelRadius: '60%',
          }]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fontWeight: 'bold',
            },
          }}
        />
      </div>
    </div>
  );
};

export default Metricas;
