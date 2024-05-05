import {useState} from "react";
import "./App.css";
import MyDropzone from "./modules/upload/Dropzone";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React TypeScript Starter</h1>
      <MyDropzone />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
