import styles from "./style/todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handelClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const completed = item.done ? styles.completed : "";
  return (
    <div className={styles.container}>
      <div className={styles.todoItems}>
        <span className={completed} onClick={() => handelClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.btn}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
