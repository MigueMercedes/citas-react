function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?');
    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="m-3 bg-white shadow-md py-10 px-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="normal-case font-normal">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="normal-case font-normal">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="normal-case font-normal">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="normal-case font-normal">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="normal-case font-normal">{sintomas}</span>
      </p>

      <div className="flex gap-5 mt-5">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={ () => setPaciente(paciente)}
        >Editar
        </button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={ handleEliminar }
        >Eliminar
        </button>
        
      </div>

    </div>
  );
};

export default Paciente;
