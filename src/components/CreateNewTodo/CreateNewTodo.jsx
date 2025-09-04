import React from "react";
import styles from "./CreateNewTodo.module.css";

export default function CreateNewTodo({ handleCreateTodos }) {
  const [value, setValue] = React.useState("");

  return (
    <div className={styles.createInputTodoWrapper}>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleCreateTodos(value);

          setValue("");
        }}
      >
        <label htmlFor="new-list-form-input">New Item:</label>
        <div className={styles.row}>
          <input
            id="new-list-form-input"
            type="text"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <button>Add </button>
        </div>
      </form>
    </div>
  );
}
