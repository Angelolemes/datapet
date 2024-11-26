import { useFormik } from "formik";
import { LoginTypes } from "../types/log";
import { ValidacionesLogin } from "../validaciones/ValidacionesForm";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "../axios/axios.ts";


import '../css/login.css'
function LoginRomina() {
  const [showAlert, setShowAlert] = useState(false);
  const [validateOnChange, setValidateOnChange] = useState(false);
  const formik = useFormik<LoginTypes>({
    initialValues: { correo: "", password: "" },
    validationSchema: ValidacionesLogin, validateOnChange,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/login", { email: values.correo, password: values.password });
        console.log("Usuario logueado:", response.data);
        formik.resetForm();
        window.location.href = '/vp';
      } catch (error) {
        window.location.href = '/pgc';
        
      }
    }
  });

  useEffect(() => {
    setShowAlert(Object.keys(formik.errors).length > 0);
  }, [formik.errors]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    if (validateOnChange) {
      formik.validateField(event.target.name);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidateOnChange(true);
    formik.handleSubmit();
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-fondo">
      {showAlert && (
        <div className="absolute top-4 w-full flex justify-center">
          
<Stack sx={{ width: '35%', marginBottom: 2 }} >

<Alert variant="filled" severity="warning"sx={{ color: 'black' }}>
  Completa los campos marcados en rojo o el campo selecionado</Alert>

</Stack>
        </div>
      )}
      <form 
        onSubmit={handleSubmit}
        className="bg-fondo2 p-6 rounded-lg shadow-lg w-80 mb-8"
      >
        <h1 className="text-2xl font-bold text-Romina1 mb-4 text-center">
          Second Year and Company
        </h1>

        <label htmlFor="correo" className="block text-textolp mb-1">
          Correo
        </label>
        <input
          type="email"
          name="correo"
          onChange={handleChange}
          value={formik.values.correo}
          className={`w-full p-2 mb-4 border ${
            formik.errors.correo ? "border-red-500" : "border-gray-300"
          } rounded bg-white text-Romina2`}
        />

        <label htmlFor="password" className="block text-textolp mb-1">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formik.values.password}
          className={`w-full p-2 mb-4 border ${
            formik.errors.password ? "border-red-500" : "border-gray-300"
          } rounded bg-white text-Romina2`}
        />

        <button
          type="submit"
          className="w-full bg-[#108b6f] text-white p-2 rounded hover:bg-[#0e7459] transition"
        >
          Ingresar
        </button>

       

      </form>
      <button className="bg-[#108b6f] p-2 rounded hover:bg-[#0e7459] transition"
        style={{ width: '140px' }}>
  <a href="/rg" className="block text-center">Registrarse</a>
</button>

    </div>
  );
}

export default LoginRomina;
