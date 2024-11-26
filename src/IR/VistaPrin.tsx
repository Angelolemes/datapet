


function VistaPrin() {
  return (
   
    <div className="flex flex-col min-h-screen bg-gray-100">
  
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-center">Bienvenido</h1>
    </header>

 
    <main className="flex-1 flex justify-center items-center bg-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-6">
        
       
        <div className="relative group">
          <h4
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
            style={{ fontSize: '20px', marginTop: '42px' }}
          >
            Ventas
          </h4>
          <div className="absolute left-0 hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
            <a href="/ventas" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Ventas Totales de un mes</a>
            
          </div>
        </div>


        <div className="relative group">
          <h4
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
            style={{ fontSize: '20px', marginTop: '42px' }}
          >
            Clientes
          </h4>
          <div className="absolute left-0 hidden group-hover:block mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Todos los clientes</a>
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Ranking clientes</a>
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Clientes pasan monto estandar</a>
          </div>
        </div>

      </div>
    </main>

       
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>© 2024 Hanke & Kuschinski </p>
        </footer>

      </div>

    
     
  );
}

export default VistaPrin;
