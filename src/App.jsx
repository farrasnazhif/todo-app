import React from "react";
import Footer from "./fragments/Footer";
import Navbar from "./fragments/Navbar";
import CreateNewTodo from "./components/CreateNewTodo/CreateNewTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);

  function handleCreateTodos(value) {
    setTodos([
      ...todos,
      {
        value,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function handleToggleTodos(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  }

  function handleDeleteTodos(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={`app-wrapper `}>
      <Navbar />
      <div className="list-wrapper">
        <TodoList
          todos={todos}
          handleToggleTodos={handleToggleTodos}
          handleDeleteTodos={handleDeleteTodos}
        />
        <CreateNewTodo handleCreateTodos={handleCreateTodos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
