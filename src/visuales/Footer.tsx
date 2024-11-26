import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname !== "/login" && (
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition"
        >
          Ir al Login
        </button>
      )}

      {location.pathname !== "/registro" && (
        <button
          type="button"
          onClick={() => navigate("/registro")}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition"
        >
          Ir al registro
        </button>
      )}

      {location.pathname === "/registro" && (
        <button
          type="button"
          onClick={() => navigate("/admin")}
          className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-400 transition"
        >
          Admin
        </button>
      )}
    </>
  );
}

export default Footer;
