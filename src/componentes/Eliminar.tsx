import { RegistroP } from "../types/log";
import { RegistroAnimal } from "../types/log";


type PropEliminar = {
  persona?: RegistroP;
  animal?: RegistroAnimal;
  Eliminar: (id: string) => void;
};
function Eliminar({ persona, animal, Eliminar }: PropEliminar) {
  return (
    <>
      {persona && (
        <button type="button"
          className="py-2 px-10 bg-[#0e7459] hover:bg-red-700 font-bold uppercase rounded-lg"
          onClick={() => Eliminar(persona.idUsuario)}
        >Eliminar </button>)}

        
      {animal && (
        <button type="button"
          className="py-2 px-10 bg-[#0e7459] hover:bg-red-700 font-bold uppercase rounded-lg"
          onClick={() => Eliminar(animal.idMascota)}
        >Eliminar </button>)}
    </>
  );
}

export default Eliminar;
