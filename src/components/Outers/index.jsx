export const Outers = ({ transacciones }) => (
  <ul>
    <h4>Saidas:</h4>
    {transacciones
      .filter((item) => item.quantity < 0)
      .map((item, i) => (
        <li key={i}>
          <p>
            Nome: {item.name}, Qtd: {item.quantity}, Valor: {item.price}
          </p>
        </li>
      ))}
  </ul>
);
