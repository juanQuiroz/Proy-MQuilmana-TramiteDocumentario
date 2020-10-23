import React, { useContext, useEffect, useState } from "react";

import authContext from "../../context/autenticacion/authContext";
import tramiteContext from "../../context/tramites/tramiteContext";

const FormIniciarTramite = () => {
  // Context de autenticacion
  const AuthContext = useContext(authContext);
  const {
    usuario,
    listarUsuarios,
    listaUsuarios,
    ususarioAutenticado,
  } = AuthContext;

  // Tramite context
  const TramiteContext = useContext(tramiteContext);
  const {
    registrarTramite,
    mensaje,
    msgRegistrarTramite,
    msgCodTramite,
  } = TramiteContext;

  if (usuario) {
    var areaActual = usuario.nombreArea;
  }
  // State de iniarTramite
  const [tramite, setTramite] = useState({
    codExpediente: "",
    codTramite: "",
    origenExpediente: "",
    tipoTramite: "",
    areaInicio: areaActual,
    areaDestino: "",
    asunto: "",
    nombre: "",
    paterno: "",
    materno: "",
    docIndentidad: "",
    telefono: "",
    correo: "",
    domicilio: "",
    fundamentoSol: "",
    fechaInicio: Date,
  });

  // const [error, setError] = useState(false);

  const onchangeInput = e => {
    setTramite({
      ...tramite,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async e => {
    e.preventDefault();

    // Destructuring
    const {
      codExpediente,
      origenExpediente,
      tipoTramite,
      areaInicio,
      areaDestino,
      asunto,
      nombre,
      paterno,
      materno,
      docIndentidad,
      telefono,
      correo,
      domicilio,
      fundamentoSol,
      fechaInicio,
    } = tramite;
    // Registrar Tramite
    registrarTramite({
      codExpediente,
      codTramite: Date.now().toString(),
      origenExpediente,
      tipoTramite,
      areaInicio,
      areaDestino,
      asunto,
      nombre,
      paterno,
      materno,
      docIndentidad,
      telefono,
      correo,
      domicilio,
      fundamentoSol,
      fechaInicio,
    });

    // Reiniciar formulario
    setTramite({
      codExpediente: "",
      origenExpediente: "",
      tipoTramite: "",
      areaInicio: areaActual,
      areaDestino: "",
      asunto: "",
      nombre: "",
      paterno: "",
      materno: "",
      docIndentidad: "",
      telefono: "",
      correo: "",
      domicilio: "",
      fundamentoSol: "",
      fechaInicio: Date,
    });

    // setTimeout(() => {
    //   setError(false);
    // }, 4000);
  };

  useEffect(() => {
    listarUsuarios();
    ususarioAutenticado();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <form
      onSubmit={onSubmitForm}
      className="bg-green-200 shadow-md rounded mx-10 mt-10 px-6 pt-3 pb-8 mb-8"
    >
      {/* {error ? (
        <div className="bg-red-400 p-4 rounded font-bold shadow-md text-center mb-1">
          Todos los campos son obligatorios
        </div>
      ) : null} */}
      {msgRegistrarTramite ? (
        <div className={`${mensaje.classname}`}>{mensaje.msg}</div>
      ) : null}
      <h1 className="font-light text-4xl text-left mb-4 text-black">
        Iniciar Trámite
      </h1>

      <div className="grid grid-cols-2 gap-3">
        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Código de expediente (*)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Cod. expediente"
            name="codExpediente"
            onChange={onchangeInput}
            value={tramite.codExpediente}
          />
        </div>

        <div className="inline-block relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Origen del trámite (*)
          </label>
          <select
            name="origenExpediente"
            onClick={onchangeInput}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option selected disabled>
              -- Seleccione el origen del trámite --
            </option>
            <option>EXTERNO</option>
            <option>INTERNO</option>
          </select>
          <div className="pointer-events-none absolute -mt-6 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div class="inline-block relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Tipo de trámite (*)
          </label>
          <select
            onClick={onchangeInput}
            name="tipoTramite"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option selected disabled>
              -- Seleccione el tipo de trámite --
            </option>
            <option>CARTA</option>
            <option>EXPEDIENTE</option>
            <option>OFICIO MÚLTIPLE</option>
            <option>MEMORIALES</option>
            <option>FUT</option>
            <option>OFICIO</option>
            <option>SOLICITUD</option>
            <option>MEMORANDUM</option>
            <option>RESOLUCIÓN</option>
            <option>CERTIFICADO</option>
            <option>DECLARACION JURADA</option>
            <option>INFORME</option>
            <option>SALUDO</option>
            <option>NOTIFICACIÓN</option>
            <option>OTRO</option>
          </select>
          <div className="pointer-events-none absolute -mt-6 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="mb-2 inline-block relative w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Destiono Área / Gerencia / SubGerencia (*)
          </label>
          <select
            onClick={onchangeInput}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            name="areaDestino"
          >
            {listaUsuarios
              ? listaUsuarios.usuarios.map(usuario => (
                  <option value={usuario.nombreArea} key={usuario._id}>
                    {usuario.nombreArea}
                  </option>
                ))
              : null}
          </select>
          <div className="pointer-events-none absolute -mt-6 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Asunto (*)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Asunto"
            name="asunto"
            onChange={onchangeInput}
            value={tramite.asunto}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Nombres (*)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Nombres"
            name="nombre"
            onChange={onchangeInput}
            value={tramite.nombre}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Apellido paterno (*)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Apellido paterno"
            name="paterno"
            onChange={onchangeInput}
            value={tramite.paterno}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Apellido materno
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Apellido materno"
            name="materno"
            onChange={onchangeInput}
            value={tramite.materno}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            DNI o RUC / Extranjería (*)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Documento de identidad"
            name="docIndentidad"
            onChange={onchangeInput}
            value={tramite.docIndentidad}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Teléfonos
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Teléfonos"
            name="telefono"
            onChange={onchangeInput}
            value={tramite.telefono}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Correo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="email"
            placeholder="Correo"
            name="correo"
            onChange={onchangeInput}
            value={tramite.correo}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Domicilio
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Usuario"
            name="domicilio"
            onChange={onchangeInput}
            value={tramite.domicilio}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Fundamento de la socilitud
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Fundamento de la socilitud"
            name="fundamentoSol"
            onChange={onchangeInput}
            value={tramite.fundamentoSol}
          />
        </div>

        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="usuario"
          >
            Fecha de inicio de tramite (*)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="date"
            placeholder="Fecha de inicio de tramite"
            name="fechaInicio"
            onChange={onchangeInput}
            value={tramite.fechaInicio}
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="shadow-md h-12 w-1/2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-32 mt-6 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Iniciar trámite
        </button>
      </div>
      {msgCodTramite ? (
        <div
          className={`bg-green-400 p-4 rounded font-bold shadow-md text-cente mt-2`}
        >
          Codigo de trámite: {mensaje.res.data.codTramite}
        </div>
      ) : null}
    </form>
  );
};

export default FormIniciarTramite;
