import React, { useState } from "react";

const CreateArea = (props) => {
  const { onAdd } = props;
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (!note.title && !note.content) return;
    onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div className="create-area">
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="2"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
