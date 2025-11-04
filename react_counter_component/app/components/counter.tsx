import React, {useState} from "react";
import "./../css/App.css";


export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="Counter-Container">
        <h1 className="Counter">Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)} className="Button">Increment</button>
    </div>
  );
}