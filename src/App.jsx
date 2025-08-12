import Bienvenidos from "./components/Bienvenidos";
import TeoriaComponente from "./components/TeoriaComponente";

function App() {
  // aqui agrego la logica de un componente
  const modulo = 2;

  return (
    // aqui puedo agregar mas logica
    <main className="container my-5">
      <h1>Hola mundo</h1>
      {/* <Bienvenidos  ></Bienvenidos> */}
      <Bienvenidos/>
      <TeoriaComponente comision='Web 13' modulo={modulo}/>
    </main>
  );
}

export default App;
