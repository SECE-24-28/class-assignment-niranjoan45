import useCounter from "./useCounter";

function CounterTwo() {
  const { count, increment, decrement, reset } =
    useCounter(50, 5, 2);

  return (
    <div>
      <h3>Counter Two </h3>
      <p>{count}</p>

      <button onClick={increment}>+5</button>
      <button onClick={decrement}>-2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;