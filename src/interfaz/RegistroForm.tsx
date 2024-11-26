import { useFormik } from "formik";
import { RegistroP } from "../types/log";
import { ValidacionesRegistro } from "../validaciones/ValidacionesForm";
//import Footer from "../visuales/Footer";
import { useEffect, useState } from "react";
import axios from "../axios/axios.ts";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import  '../css/RF.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import fondo from'../img/Formas organicas/Captura de pantalla 2024-11-05 201926.png'


function RegistroForm() {
 
  const [showAlert, setShowAlert] = useState(false);
  const [validateOnChange, setValidateOnChange] = useState(false);
  const formik = useFormik<RegistroP>({
    initialValues: {name: '',apellido: '',correo: '',password: '',direccion: '',DNI: '',telefono: '', idUsuario:'', tipoUsuario:''},
    validationSchema: ValidacionesRegistro, 
    validateOnChange, 
    onSubmit: async (values) => {  
      try {
        const response = await axios.post("/usuarios", values);
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
          
         window.location.href = '/login'; 
      }
  };


  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-rosadito50">
      {showAlert && (
     <div className="absolute top-4 w-full flex justify-center">

<Stack sx={{ width: '35%', marginBottom: 2 }} >

  <Alert variant="filled" severity="warning"sx={{ color: 'black' }}>
    Completa los campos marcados en rojo o el campo selecionado</Alert>

</Stack>

</div>)}
<form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg mb-8">
    
    <h1 className="text-2xl font-bold text-[#E72D7C] mb-6 text-center">Registro</h1>
             
    <div className="grid grid-cols-2 gap-4">
    
    <div>

<label htmlFor="name" className="block text-textolp mb-1">Nombre</label>
<input type="text" name="name" onChange={handleChange} value={formik.values.name}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.name ? 'border-alerta'  : 'border-[#E72D7C]'} rounded bg-gray-800 `}/>



<label htmlFor="dni" className="block text-textolp mb-1">DNI</label>
<input type="number"  name="DNI" onChange={handleChange} value={formik.values.DNI}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.DNI ? 'border-alerta'  : 'border-[#E72D7C]'} rounded bg-gray-800 `}/>



<label htmlFor="telefono" className="block text-textolp mb-1">Teléfono</label>
<input type="number"  name="telefono"   onChange={handleChange} value={formik.values.telefono}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.telefono ? 'border-alerta'  : 'border-[#E72D7C]'} rounded bg-gray-800 `}/>

  
    </div>

       
    <div>

<label htmlFor="apellido" className="block text-textolp mb-1">Apellido</label>
<input   type="text"   name="apellido"  onChange={handleChange} value={formik.values.apellido}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.apellido ? 'border-alerta'  : 'border-[#E72D7C]'} rounded bg-gray-800 `}/>


<label htmlFor="direccion" className="block text-textolp mb-1">Dirección</label>
<input  type="text" name="direccion" onChange={handleChange}  value={formik.values.direccion}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.direccion ? 'border-alerta'  : 'border-[#E72D7C]'} rounded bg-gray-800 `}/>


<label htmlFor="correo" className="block text-textolp mb-1">Correo</label>
<input type="email" name="correo" onChange={handleChange} value={formik.values.correo}
className={`w-full p-2 mb-4 text-[#E72D7C] border ${formik.errors.correo ? 'border-alerta'  : 'border-[#E72D7C]'} rounded bg-gray-800 `}/>

    
   </div>
          
   </div>

 
   <div className="mt-4 flex items-start">
  <div className="flex-grow">
    <label htmlFor="password" className="block text-textolp mb-1">Contraseña</label>
    <input
      type="password"
      name="password"
      onChange={handleChange}
      value={formik.values.password}
      className={`w-full p-2 mb-4  text-[#E72D7C] border ${formik.errors.password ? 'border-alerta' : 'border-[#E72D7C]'} rounded bg-gray-800 `}
    />
  </div>
  
  <div className="ml-4 flex-shrink-0 w-1/3">
    <label id="tipo-usuario-label" className="block text-textolp  mb-1">Tipo de Usuario</label>
    <Select
      labelId="tipo-usuario-label"
      id="tipo-usuario"
      name="tipoUsuario"
      value={formik.values.tipoUsuario}
      onChange={formik.handleChange}
      className={`w-full border bg-blanco ${formik.errors.tipoUsuario ? 'border-alerta' : 'border-[#E72D7C]'} rounded bg-gray-800 `}
      style={{height: '40px', color: '#E72D7C'}}>
      <MenuItem value="usuario">Usuario</MenuItem>
      <MenuItem value="admin">admin</MenuItem>
    </Select>
  </div>
</div>

  
  <button type="submit" 
  className="w-full bg-[#108b6f] p-2 rounded hover:bg-blue-400 transition">
  Registrar</button>

</form>
<img
  src={fondo}
  alt=""
  className="izq-img"/>
<img
  src={fondo}
  alt=""
  className="der-img"/>
 {/* <Footer />*/}
</div></>);}

export default RegistroForm;
