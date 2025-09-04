import { useEffect, useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./fragments/Footer";
import Navbar from "./fragments/Navbar";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes && savedNotes.length) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes.length) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <div className={`app-wrapper `}>
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;
