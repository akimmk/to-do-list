import { useState } from "react";
import Todolist from "./Todolist";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handelSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <Todolist key={item} item={item} />
      ))}
    </div>
  );
}
