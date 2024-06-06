import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to={"/"}>
          <p>Accueil</p>
        </Link>
        <Link to={"/helloworld"}>
          <p>Exercice 1</p>
        </Link>
        <Link to={"/greeting"}>
          <p>Exercice 2</p>
        </Link>
        <Link to={"/counter"}>
          <p>Exercice 3</p>
        </Link>
        <Link to={"/userlist"}>
          <p>Exercice 4</p>
        </Link>
        <Link to={"/emailform"}>
          <p>Exercice 5</p>
        </Link>
        <Link to={"/fruitlist"}>
          <p>Exercice 6</p>
        </Link>
        <Link to={"/todolist"}>
          <p>Exercice 7</p>
        </Link>
      </header>
    </>
  );
};

export default Header;
