export const Transactions = ({ transacciones }) => (
  <ul>
    <h4>Todas as movimentações:</h4>
    {transacciones.map((item, i) => (
      <li key={i}>
        <p>
          Nome: {item.name}, Qtd: {item.quantity}, Valor: {item.price}
        </p>
      </li>
    ))}
  </ul>
);
