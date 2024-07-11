import styles from "./style/todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(){
    setTodos(todos.filter((todo)=>todo !== item));
  }
  return (
    <div className={styles.container}>
      <div className={styles.todoItems}>
        {item}
        <span>
          <button onClick={()=>handleDelete(item)} className={styles.btn}>x</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
