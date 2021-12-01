import { useState } from "react";

function Cadastro({ transacciones, setTransacciones }) {
  const [entrada, setEntrada] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  return (
    <div className="cadastro">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          name="name"
          placeholder="name"
          value={entrada.name}
          onChange={(event) =>
            setEntrada({ ...entrada, name: event.target.value })
          }
        />
        <input
          name="quantity"
          placeholder="quantity"
          value={entrada.quantity}
          onChange={(event) =>
            setEntrada({ ...entrada, quantity: event.target.value })
          }
        />
        <input
          name="price"
          placeholder="price"
          value={entrada.price}
          onChange={(event) =>
            setEntrada({ ...entrada, price: event.target.value })
          }
        />

        <button
          type="submit"
          onClick={() => setTransacciones([...transacciones, entrada])}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
