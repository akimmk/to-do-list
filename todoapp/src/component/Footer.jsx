import styles from "./style/footer.module.css";

export default function Footer({totalTodos, completedTodos}) {
  return (
    <div className={styles.footer}>
      <span className={styles.items}>Total Todos : {totalTodos}</span>
      <span className={styles.items}>Completed Todos : {completedTodos}</span>
    </div>
  );
}
