import React from "react";
import Footer from "./fragments/Footer";
import Navbar from "./fragments/Navbar";
import CreateNewTodo from "./components/CreateNewTodo/CreateNewTodo";

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

  return (
    <div className={`app-wrapper `}>
      <Navbar />
      <div className="list-wrapper">
        <p>Hello</p>
        <CreateNewTodo handleCreateTodos={handleCreateTodos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
