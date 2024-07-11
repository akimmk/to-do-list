import TodoItem from "./TodoItem";
import styles from "./style/todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.container}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
