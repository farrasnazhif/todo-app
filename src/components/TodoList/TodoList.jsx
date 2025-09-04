import { X } from "lucide-react";
import styles from "./TodoList.module.css";

export default function TodoList({
  todos,
  handleToggleTodos,
  handleDeleteTodos,
}) {
  return (
    <ol className={styles.todoList}>
      {todos.map(({ id, value, isCompleted }) => (
        <li key={id}>
          <button
            className={`${styles.toggleButton} ${
              isCompleted ? styles.completedToggleButton : undefined
            }`}
            onClick={() => {
              handleToggleTodos(id);
            }}
          >
            {value}
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => {
              handleDeleteTodos(id);
            }}
          >
            <X />
          </button>
        </li>
      ))}
    </ol>
  );
}
