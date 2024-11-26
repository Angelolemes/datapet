
import { RegistroAnimal } from "../types/log";
import {ValidacionesAnimales } from "../validaciones/ValidacionesForm";
import { useFormik} from "formik";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from "../axios/axios.ts";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import fondoM from '../img/Formas organicas/Forma magenta.png'
function RegistroAnimales() {
  const [showAlert, setShowAlert] = useState(false);
  const [validateOnChange, setValidateOnChange] = useState(false);

  const formik = useFormik<RegistroAnimal>({
    initialValues: {nombre: '',raza: '',descripcion: '',alergias: '',edad: '',peso: '',castrado: false, idMascota:'', idSalud:'', tipo:''},
    validationSchema: ValidacionesAnimales, 
    validateOnChange, onSubmit: async (values) => {  
      try {
        const response = await axios.post("/mascotas", values);
        console.log("mascotas registrada:", response.data);formik.resetForm();
      } catch (error) {console.error("Error al registrar el mascotas:", error);
        setShowAlert(true)}},});
      
      useEffect(() => {setShowAlert(Object.keys(formik.errors).length > 0);}, [formik.errors]);

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {formik.handleChange(event) 
    if (validateOnChange) {formik.validateField(event.target.name)}}

 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => 
      {event.preventDefault(); setValidateOnChange(true); const errors = await formik.validateForm();
        console.log('Datos ingresados:', formik.values);
       
        if (Object.keys(errors).length === 0) {
           
            await formik.handleSubmit(); 
            
         
        }
    };


return ( <>
<div className="flex flex-col justify-center items-center min-h-screen bg-rosadito50">  
{showAlert && (
     <div className="absolute top-4 w-full flex justify-center">
<Stack sx={{ width: '50%', marginBottom: 2 }} ><Alert variant="outlined" severity="warning"
sx={{ color: 'orange' }}>Completa los campos marcados en rojo o el campo selecionado</Alert></Stack></div>)}
<form onSubmit={handleSubmit} className="bg-rosadito50 p-6 rounded-lg shadow-lg w-full max-w-lg mb-8"> 
    
    <h1 className="text-2xl font-bold text-[#E72D7C] mb-6 text-center">Registro Animal</h1>
    
    <div className="grid grid-cols-2 gap-4">
    
    <div>
 
    <label htmlFor="tipo" className="block text-textolp mb-1">Tipo de Animal</label>
      <Select
        name="tipo"
        onChange={formik.handleChange}
        value={formik.values.tipo}
        className={`w-full p-2 mb-4  border  bg-blanco ${formik.errors.tipo ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 `}
        style={{height: '40px', color: '#E72D7C'}}>
        <MenuItem value="Perro">Perro</MenuItem>
        <MenuItem value="Gato">Gato</MenuItem>
        <MenuItem value="Ave">Ave</MenuItem>
        <MenuItem value="Conejo">Conejo</MenuItem>
        <MenuItem value="Pez">Pez</MenuItem>
        </Select>



 
<label htmlFor="nombre" className="block text-textolp mb-1">Nombre</label>
<input type="text" name="nombre" onChange={handleChange} value={formik.values.nombre}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.nombre ? 'border-red-500'  : 'border-gray-600'} rounded bg-gray-800 text-white`}/>

  


<label htmlFor="raza" className="block text-textolp mb-1">Raza</label>
<input type="text" name="raza" onChange={handleChange} value={formik.values.raza}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.raza ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 text-white`}/>


  
    </div>

       
    <div>

<label htmlFor="alergias" className="block text-textolp mb-1">Alergias</label>
<input type="text" name="alergias" onChange={handleChange} value={formik.values.alergias}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.alergias ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 text-white`}/>

  

<label htmlFor="edad" className="block text-textolp mb-1">Edad</label>
<input type="number" name="edad" onChange={handleChange} value={formik.values.edad}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.edad ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 text-white`}/>


<label htmlFor="peso" className="block text-textolp mb-1">Peso</label>
<input type="number" name="peso" onChange={handleChange} value={formik.values.peso}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.peso ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 text-white`}/>

    
   </div>
          
   </div>

   
   <div className="mt-4">
    
<label htmlFor="descripcion" className="block text-textolp mb-1">Descripcion</label>
<input type="text" name="descripcion" onChange={handleChange} value={formik.values.descripcion}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.descripcion ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 text-white`}/>


<label htmlFor="castrado" className="block text-textolp mb-1">Castrado</label>

<label className="text-textolp mr-4">
<input type="radio"name="castrado"value="true"checked={formik.values.castrado === true}
onChange={() => formik.setFieldValue('castrado', true)}
className="mr-2"/>Sí</label>

<label className="text-textolp">
<input type="radio"name="castrado"value="false"checked={formik.values.castrado === false}
onChange={() => formik.setFieldValue('castrado', false)}
className="mr-2"/>No</label>

</div>


<button type="submit" className="w-full bg-[#108b6f] p-2 rounded hover:bg-blue-400 transition">
Guardad Animal</button>
<img
  src={fondoM}
  alt=""
  className="izq-img"/>
<img
  src={fondoM}
  alt=""
  className="der-img"/>
</form></div></>)}

export default RegistroAnimales