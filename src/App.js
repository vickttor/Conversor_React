import icon from "./imgs/dinheiro-icon.png";
import github from "./imgs/github.png";
import "./App.css";
import Conversor from "./components/Conversor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="Icon-money" alt="money" />
        <h1>Conversor de moeda</h1>
      </header>
      <section id="content">
        <div className="block">
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="BRL" moedaB="JPY"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="JPY" moedaB="BRL"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        </div>
      </section>
      <div className="footer">
        <img src={github} className="criador" alt="criador" />
        <a
          href="https://github.com/VictorSilva15"
          rel="noreferrer"
          target="_blank"
        >
          VictorSilva15
        </a>
      </div>
    </div>
  );
}

export default App;
