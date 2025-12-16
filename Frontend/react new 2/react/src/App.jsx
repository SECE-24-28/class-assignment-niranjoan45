import CounterOne from "./counterone";
import CounterTwo from "./countertwo";

function App() {
  return (
    <div>
      <h1>Multiple Counters</h1>
      <CounterOne />
      <hr />
      <CounterTwo />
    </div>
  );
}

export default App;