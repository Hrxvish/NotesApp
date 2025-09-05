import React, { useEffect, useState } from "react";
import { fetchNotes, deleteNote } from "../api";
import { Link } from "react-router-dom";

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes().then(setNotes);
  }, []);

  const handleDelete = async id => {
    await deleteNote(id);
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notes</h2>
      {notes.map(n => (
        <div key={n.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{n.title}</h3>
          <p>{n.content}</p>
          <Link to={`/edit/${n.id}`}>Edit</Link> |{" "}
          <button onClick={() => handleDelete(n.id)}>Delete</button> |{" "}
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${window.location.origin}/public/${n.id}`);
              alert("Link copied!");
            }}
          >
            Share
          </button>
        </div>
      ))}
    </div>
  );
}
