import { useState } from "react";
import Form from "./Form";
import TodoList from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.done).length;
  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
    </div>
  );
}
