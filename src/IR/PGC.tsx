import ConstructionIcon from '@mui/icons-material/Construction';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
function PGC() {

  
  return (
    <>
     
<header className="text-center bg-[#108b6f] py-12 w-full">
    <div className="flex justify-center items-start ">

    <h3 className="bg-white text-center p-4 rounded shadow-lg flex bg-blanco items-center space-x-2">
         
    <ConstructionIcon fontSize="large" /> 

    <span className="text-xl font-semibold  text-Romina2">Pagina en Construccion</span>
       
    </h3>
   
    </div>
    </header>
    <div className="flex justify-center ">
      
    <a className="text-Romina1 font-bold  " style={{ fontSize: '20px', marginTop: '42px' }} href="/"> Inicie secion como admin 
    <br />
   
   </a>
    
   </div>
   <div className="flex justify-center ">
    <a href="/vp">
   <KeyboardDoubleArrowRightIcon fontSize="large"/>
    <AssignmentIndIcon fontSize="large"/> 
    <KeyboardDoubleArrowLeftIcon fontSize="large"/>
    </a>
    </div>
   </>
  );
};

export default PGC;
