import { useState } from "react";
import styles from './style/form.module.css';

export default function Form({todos ,setTodos}) {
    const [todo, setTodo] = useState("");
   
    function handelSubmit(e) {
      e.preventDefault();
      setTodos([...todos, todo]);
      setTodo("");
    }
  return (
    <form className={styles.formInput} onSubmit={handelSubmit}>
       <div className={styles.container}>
      <input className={styles.inputField}
        type="text" placeholder="Enter you todos..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className={styles.btn} type="submit">Add</button>
      </div>
    </form>

  );
}
