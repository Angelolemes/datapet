import { useNavigate } from "react-router-dom";

function InterfazAdmin() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rosadito50 p-4">
      <h1 className="text-3xl font-bold mb-3 text-gray-200 mt-[-20px]">
        Interfaz del Administrador
      </h1>
      <p className="mb-6 text-gray-300 text-center mt-[-10px]">
        Aquí puedes gestionar todos los animales y usuarios registrados en el sistema.
      </p>
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-6 w-full max-w-3xl justify-items-center">
        <div className="flex flex-col items-center bg-blanco p-4 rounded shadow-lg w-48">
          <button
            type="button"
            onClick={() => navigate("/verAnimales")}
            className="w-full py-2 bg-enesteestoy text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Animales
          </button>
          <p className="mt-2 text-gray-300 text-center text-sm">
            Permite ver y eliminar animales.
          </p>
        </div>

        <div className="flex flex-col items-center bg-blanco p-4 rounded shadow-lg w-48">
          <button
            type="button"
            onClick={() => navigate("/metricas")}
            className="w-full py-2 bg-enesteestoy text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Métricas
          </button>
          <p className="mt-2 text-gray-300 text-center text-sm">
            Permite ver gráficos de las mascotas registradas.
          </p>
        </div>

        <div className="flex flex-col items-center bg-blanco p-4 rounded shadow-lg w-48">
          <button
            type="button"
            onClick={() => navigate("/VerUsuario")}
            className="w-full py-2 bg-enesteestoy text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Usuarios
          </button>
          <p className="mt-2 text-gray-300 text-center text-sm">
            Permite ver y eliminar usuarios.
          </p>
        </div>

        <div className="flex flex-col items-center bg-blanco p-4 rounded shadow-lg w-48">
          <button
            type="button"
            onClick={() => navigate("/registroAnimales")}
            className="w-full py-2 bg-enesteestoy text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Registro animales
          </button>
          <p className="mt-2 text-gray-300 text-center text-sm">
            Aca podes registrar a una mascotas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterfazAdmin;
