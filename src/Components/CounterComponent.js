import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={addCount}>Cliquez ici</button>
      <p>{count}</p>
    </div>
  );
};

export default CounterComponent;
