
import "./css/App.css";
import Counter from "./components/counter";

export default function Home() {
  return (
    <div className="App">
      {/* call the Counter Component */}
      <Counter />
    </div>
  );
}