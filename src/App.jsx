import { useEffect, useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./fragments/Footer";
import Navbar from "./fragments/Navbar";

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    return savedDarkMode || false;
  });

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    document.documentElement.classList.toggle("light-mode", !darkMode);

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleDeleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  }

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <div className="create-area-container">
          <CreateArea onAdd={addNote} />
        </div>
        <div className="note-container">
          {notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
