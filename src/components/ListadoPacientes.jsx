import Paciente from './Paciente';

export default function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (
    <div className="md:w-1/2 lg:h-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-bold text-3xl text-center">Listado Pacientes</h2>
      {pacientes && pacientes.length ? (
        <>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
              key={paciente.id} 
              paciente={paciente} 
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>

      ) : (
        <>
          <p className="text-xl mt-5 mb-10 text-center">
            No hay pacientes {''}
          <span className='text-indigo-600 font-bold'>Agrega uno!</span></p>
        </>
      )}
    </div>
  );
}
