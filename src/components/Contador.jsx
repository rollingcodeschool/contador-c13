import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  //  let contador = 0

  return (
    <section className="text-center d-flex justify-content-center mt-5">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">Contador</h5>
          <p className="card-text fs-3">{contador}</p>
          <button
            className="btn btn-primary"
            onClick={() => setContador(contador + 1)}
          >
            ➕
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contador;
