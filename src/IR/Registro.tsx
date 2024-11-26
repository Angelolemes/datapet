import React from 'react'
import { RegistroRomSinID } from '../types/log';
import axios from '../axios/axios.ts';
import { useFormik } from 'formik';
import { ValidacionesRegistroRom } from '../validaciones/ValidacionesForm';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Registro() {
const [showAlert, setShowAlert] = useState(false);
const [validateOnChange, setValidateOnChange] = useState(false);
const formik = useFormik<RegistroRomSinID>({
    initialValues: {nombre: '',apellido: '',correo: '',contrasena: '', dni: '', telefono: '', fecha_nacimiento:'', administrador:false  },
    validationSchema: ValidacionesRegistroRom, 
    validateOnChange, 
    onSubmit: async (values) => {  
      try {
        const response = await axios.post("/create", values);
        console.log("Usuario registrado:", response.data);formik.resetForm();
      } catch (error) {console.error("Error al registrar el usuario:", error);
        setShowAlert(true)}},});
      
      useEffect(() => {setShowAlert(Object.keys(formik.errors).length > 0);}, [formik.errors]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {formik.handleChange(event) 
    if (validateOnChange) {formik.validateField(event.target.name)}}

  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => 
    {event.preventDefault(); setValidateOnChange(true); const errors = await formik.validateForm();
      console.log('Datos ingresados:', formik.values);
     
      if (Object.keys(errors).length === 0) {
         
          await formik.handleSubmit(); 
          
         window.location.href = '/'; 
      }
  };


  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-fondo">
      {showAlert && (
     <div className="absolute top-4 w-full flex justify-center">

<Stack sx={{ width: '35%', marginBottom: 2 }} >

  <Alert variant="filled" severity="warning"sx={{ color: 'black' }}>
    Completa los campos marcados en rojo o el campo selecionado</Alert>

</Stack>

</div>)}
<form onSubmit={handleSubmit} className="bg-fondo2 p-6 rounded-lg shadow-lg w-full max-w-lg mb-8">
    
    <h1 className="text-2xl font-bold text-Romina2 mb-6 text-center">Registro</h1>
             
    <div className="grid grid-cols-2 gap-4">
    
    <div>

<label htmlFor="name" className="block text-textolp mb-1">Nombre</label>
<input type="text" name="nombre" onChange={handleChange} value={formik.values.nombre}
className={`w-full p-2 mb-4 text-Romina2 border ${formik.errors.nombre ? 'border-alerta'  : 'border-Romina2'} rounded bg-gray-800 `}/>



<label htmlFor="dni" className="block text-textolp mb-1">DNI</label>
<input type="number"  name="dni" onChange={handleChange} value={formik.values.dni}
className={`w-full p-2 mb-4 text-Romina2 border ${formik.errors.dni ? 'border-alerta'  : 'border-Romina2'} rounded bg-gray-800 `}/>



<label htmlFor="telefono" className="block text-textolp mb-1">Teléfono</label>
<input type="number"  name="telefono"   onChange={handleChange} value={formik.values.telefono}
className={`w-full p-2 mb-4 text-Romina2 border ${formik.errors.telefono ? 'border-alerta'  : 'border-Romina2'} rounded bg-gray-800 `}/>

  
    </div>

       
    <div>

<label htmlFor="apellido" className="block text-textolp mb-1">Apellido</label>
<input   type="text"   name="apellido"  onChange={handleChange} value={formik.values.apellido}
className={`w-full p-2 mb-4 text-Romina2 border ${formik.errors.apellido ? 'border-alerta'  : 'border-Romina2'} rounded bg-gray-800 `}/>

<label htmlFor="apellido" className="block text-textolp mb-1">Fecha Nacimiento</label>
<input   type="text"   name="fecha_nacimiento"  onChange={handleChange} value={formik.values.fecha_nacimiento}
className={`w-full p-2 mb-4 text-Romina2 border ${formik.errors.fecha_nacimiento ? 'border-alerta'  : 'border-Romina2'} rounded bg-gray-800 `}/>


<label htmlFor="correo" className="block text-textolp mb-1">Correo</label>
<input type="email" name="correo" onChange={handleChange} value={formik.values.correo}
className={`w-full p-2 mb-4 text-Romina2 border ${formik.errors.correo ? 'border-alerta'  : 'border-Romina2'} rounded bg-gray-800 `}/>

    
   </div>
          
   </div>

 
   <div className="mt-4 flex items-start">
  <div className="flex-grow">
    <label htmlFor="contrasena" className="block text-textolp mb-1">Contraseña</label>
    <input
      type="contrasena"
      name="contrasena"
      onChange={handleChange}
      value={formik.values.contrasena}
      className={`w-full p-2 mb-4  text-Romina2 border ${formik.errors.contrasena ? 'border-alerta' : 'border-Romina2'} rounded bg-gray-800 `}
    />
  </div>
  
  <div className="ml-4 flex-shrink-0 w-1/3">
    <label id="administrador" className="block text-textolp  mb-1">Administrador</label>

    
<label className="text-textolp mr-4">
<input type="radio"name="administrador"value="true"checked={formik.values.administrador === true}
onChange={() => formik.setFieldValue('administrador', true)}
className="mr-2"/>Sí</label>

<label className="text-textolp">
<input type="radio"name="administrador"value="false"checked={formik.values.administrador === false}
onChange={() => formik.setFieldValue('administrador', false)}
className="mr-2"/>No</label>

  </div>
</div>

  
  <button type="submit" 
  className="w-full bg-[#108b6f] p-2 rounded hover:bg-blue-400 transition">
  Registrar</button>
  </form>
  </div>
  
  </>
  )
}

export default Registro