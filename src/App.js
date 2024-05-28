import logo from "./logo.svg";
import "./App.css";
import HelloWorldComponent from "./Components/HelloWorldComponent";
import Greeting from "./Pages/Greeting";
import CounterComponent from "./Components/CounterComponent";
import ItemList from "./Pages/ItemList";

function App() {
  return (
    <div className="App">
      <h1>Exercices React</h1>

      <h2>Exercice 1 : Utilisation de Composents</h2>
      <HelloWorldComponent />

      <h2>Exercice 2 : Utilisation des Props</h2>
      <Greeting />

      <h2>Exercice 3 : Utilisation de UseState</h2>
      <CounterComponent />

      <h2>Exercice 4 : Utilisation des Listes et clé</h2>
      <ItemList />
    </div>
  );
}

export default App;
