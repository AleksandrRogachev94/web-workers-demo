import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setNotes((prevNotes) => [input, ...prevNotes]);
    setInput("");
  };

  return (
    <div>
      <h2>Notes</h2>
      <form onSubmit={handleSubmit} className="notes-form">
        <input
          name="note"
          value={input}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <button type="submit">Add</button>
      </form>

      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note}>
            <p>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
