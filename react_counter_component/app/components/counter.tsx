import React, {useState} from "react";
import "./../css/App.css";

// Counter Component
export default function Counter() {
    // State to hold the count value
    // setCount = function to update the count value
    // count = current value of the counter
    const [count, setCount] = useState(0);
    
    return (
        
        <div className="Counter-Container">
            {/* Display the current count value */}
            <h1 className="Counter">Counter: {count}</h1>
            {/* Button to increment the count value */}
            <button onClick={() => setCount(count + 1)} className="Button">Increment</button>
        </div>
    );
}