import { useFormik } from "formik";
import { LoginTypes } from "../types/log";
import { ValidacionesLogin } from "../validaciones/ValidacionesForm";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "../axios/axios.ts";
import Esquinaverdeclaro from "../img/Formas organicas/Esquina verde claro.png";
import Esquinaverdeoscuro from "../img/Formas organicas/Esquina verde oscuro.png";

import '../css/login.css'
function LoginForm() {
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
        window.location.href = '/admin';
      } catch (error) {
        console.error(error);
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-rosadito50">
      {showAlert && (
        <div className="absolute top-4 w-full flex justify-center">
          <Stack sx={{ width: "50%", marginBottom: 2 }}>
            <Alert
              variant="outlined"
              severity="warning"
              sx={{ color: "#E72D7C" }}
            >
              Completa los campos marcados en rojo o el campo seleccionado.
            </Alert>
          </Stack>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80 mb-8"
      >
        <h1 className="text-2xl font-bold text-[#E72D7C] mb-4 text-center">
          IMUSA
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
          } rounded bg-white text-[#E72D7C]`}
        />

        <label htmlFor="password" className="block text-textolpmb-1">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formik.values.password}
          className={`w-full p-2 mb-4 border ${
            formik.errors.password ? "border-red-500" : "border-gray-300"
          } rounded bg-white text-[#E72D7C]`}
        />

        <button
          type="submit"
          className="w-full bg-[#108b6f] text-white p-2 rounded hover:bg-[#0e7459] transition"
        >
          Ingresar
        </button>
      </form>
      <img src={Esquinaverdeclaro} alt="" className="izq-imgl" />
      <img src={Esquinaverdeoscuro} alt="" className="der-imgl" />

      {/* <Footer /> */}
    </div>
  );
}

export default LoginForm;
