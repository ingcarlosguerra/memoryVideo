export default function Header({ resetearPartida, numeroDeIntentos }) {
  return (
    <header>
      <div>
        <button className="reiniciar-boton" onClick={resetearPartida}>
          Reiniciar
        </button>
      </div>
      {/* <div className="titulo">
        Intentos: {numeroDeIntentos}
      </div> */}
    </header>
  );
};