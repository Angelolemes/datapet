import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname !== "/LR" && (
        <button
          type="button"
          onClick={() => navigate("/LR")}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition"
        >
          Ir al Login
        </button>
      )}

   
    </>
  );
}

export default Footer;
