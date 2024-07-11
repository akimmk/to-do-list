import styles from './style/todoitem.module.css';

export default function TodoItem({item}) {
    return <div className={styles.container}>
      <h3 className={styles.todoItems}>{item}</h3>
    </div>;
  }
  