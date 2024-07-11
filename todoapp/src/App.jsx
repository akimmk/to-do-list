import { useState } from "react";
import Todo from "./component/Todo";
import Heading from "./component/Heading";
import './App';

function App() {
  return (
    <div className="App">
      <Heading />
      <Todo />
    </div>
  );
}

export default App;
