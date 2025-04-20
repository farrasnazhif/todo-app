import React from "react";

const Note = (props) => {
  const { title, content, onDelete, id } = props;
  return (
    <div className="note">
      <div className="note-items">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className="note-button">
        {/* <button onClick={() => onEdit(id)}>
          <i className="bx bxs-edit"></i>
        </button> */}
        <button onClick={() => onDelete(id)}>
          <i className="bx bxs-trash" />
        </button>
      </div>
    </div>
  );
};

export default Note;
