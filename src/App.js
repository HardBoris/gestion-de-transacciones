import { useState } from "react";
import "./App.css";
import Cadastro from "./components/Cadastro";
import { Inners } from "./components/Inners";
import { Outers } from "./components/Outers";
import { Transactions } from "./components/Transactions";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  return (
    <div className="app">
      <Cadastro
        transacciones={transactions}
        setTransacciones={setTransactions}
      />
      <Inners transacciones={transactions} />
      <Outers transacciones={transactions} />
      <Transactions transacciones={transactions} />
    </div>
  );
}

export default App;
