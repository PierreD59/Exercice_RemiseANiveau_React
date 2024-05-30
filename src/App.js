import "./App.css";
import CounterComponent from "./components/CounterComponent";
import Greeting from "./pages/Greeting";
import HelloWorldComponent from "./components/HelloWorldComponent";
import ItemList from "./pages/ItemList";
import LoginFormComponent from "./components/LoginFormComponent";
import DataFruitComponent from "./components/DataFruitComponent";
import TodoListComponent from "./components/TodoListComponent";

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

      <h2>Exercice 5 : Utilisation des formulaires</h2>
      <LoginFormComponent />

      <h2>Exercice 6 : Utilisation des API</h2>
      <DataFruitComponent />

      <h2>Exercice 7 : Réalisation d'une todoList</h2>
      <TodoListComponent />
    </div>
  );
}

export default App;
