import { useEffect, useState } from "react";

const DataFruitComponent = () => {
  const JsonServer = "http://localhost:3004/fruitsList";
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch(JsonServer)
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => this.error(error));
  }, []);

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFruitComponent;
