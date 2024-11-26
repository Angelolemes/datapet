import { Link } from "react-router-dom";
import Logo from "../assets/perrito y gato.png";
import X from "../img/Recurso 13-8.png"
import ig from "../img/Recurso 18-8.png"
import fb from "../img/Recurso 16-8.png"
import ubi from "../img/Recurso 22-8.png"
import was from "../img/Recurso 14-8.png"
import corr from "../img/Recurso 19-8.png"
const LandingPage: React.FC = () => {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <header className="text-center bg-[#108b6f] text-white py-12 w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-2 w-full">
            <h1 className="text-5xl font-bold">Bienvenidos a IMUSA</h1>
            <div>
              <img src={Logo} alt="Logo de Imusa" className="w-32 h-32" />
            </div>
          </div>
          <p className="mt-4 text-lg">
            ¡Por el bienestar de nuestros queridos compañeros peludos!
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/registro"
             className="bg-blanco text-textolp px-4 py-2 rounded mr-4 hover:bg-[#E72D7C] hover:text-negro border border-[#108b6f] transition"
          >
            Registrarse
          </Link>
          <Link
            to="/login"
             className="bg-blanco text-textolp px-4 py-2 rounded mr-4 hover:bg-[#E72D7C] hover:text-negro border border-[#108b6f] transition"
          >
            Iniciar Sesión
          </Link>
        </div>
      </header>

      <section className="mt-12 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E72D7C]">
          Servicios que Ofrecemos: ¡Cuidado para Todos!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#4777F]">
              Consulta Médica
            </h3>
            <p className="mt-2 text-gray-700">
              Ofrecemos exámenes completos y diagnósticos precisos para su mascota, asegurando su salud y bienestar.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#4777F]">Urgencias</h3>
            <p className="mt-2 text-gray-700">
              Atención urgente disponible 24/7, porque estamos aquí para ayudar en los momentos más críticos.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#4777F]">Vacunación</h3>
            <p className="mt-2 text-gray-700">
              Mantenga a su mascota sana y feliz con nuestras vacunas, porque la salud es fundamental para todos.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#4777F]">
              Baño y Estética
            </h3>
            <p className="mt-2 text-gray-700">
              Ofrecemos servicios de baño y estética para que su mascota luzca y se sienta genial.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#E72D7C]">
          Sobre Nosotros: Comprometidos con el Cuidado Animal
        </h2>
        <p className="mt-4 text-gray-700">
          En IMUSA, contamos con un equipo de profesionales apasionados por el cuidado de los animales. Nuestra misión es ofrecer atención médica de alta calidad en un ambiente seguro y acogedor, donde cada mascota es parte de nuestra familia.
        </p>
      </section>

      <section className="mt-12 w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#E72D7C]">
          Contáctenos: Estamos Aquí para Ayudar
        </h2>
        <p className="mt-4 text-gray-700">
          ¿Tiene alguna pregunta? No dude en{" "}
          <Link to="/login" className="text-[#2baab1] font-semibold">
            contactarnos
          </Link>{" "}
          para obtener más información. Recuerde, ¡siempre estamos aquí para apoyar a nuestros amigos peludos!
        </p>
      </section>
  <section className="mt-12 w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#E72D7C]">Conéctate con Nosotros</h2>
        <div className="flex justify-center gap-4 mt-6">
          <img src={X} alt="X logo" className="w-12 h-12" />
          <img src={ig} alt="Instagram logo" className="w-12 h-12" />
          <img src={fb} alt="Facebook logo" className="w-12 h-12" />
          <img src={ubi} alt="Ubicación logo" className="w-12 h-12" />
          <img src={was} alt="WhatsApp logo" className="w-12 h-12" />
          <img src={corr} alt="Correo logo" className="w-12 h-12" />
        </div>
      </section>
      <footer className="mt-12 bg-[#108b6f] text-white py-4 w-full text-center">
        <p>
          &copy; {new Date().getFullYear()} IMUSA. Todos los derechos
          reservados, por la felicidad de nuestros animales y el bienestar de todos.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
