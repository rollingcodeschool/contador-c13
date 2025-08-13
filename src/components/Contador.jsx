import { useState } from "react";

const Contador = () => {
const [contador, setContador] = useState(0)
//  let contador = 0

  const sumar = () => {
    setContador(contador + 1)
    console.log(contador);
  };

  return (
    <section className="text-center d-flex justify-content-center mt-5">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">Contador</h5>
          <p className="card-text fs-3">{contador}</p>
          <button className="btn btn-primary" onClick={sumar}>
            ➕
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contador;
