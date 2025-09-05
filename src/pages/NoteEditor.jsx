import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNote, createNote, updateNote, uploadPDF } from "../api";

export default function NoteEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (id) {
      fetchNote(id).then(note => {
        setTitle(note.title);
        setContent(note.content);
      });
    }
  }, [id]);

  const handleSave = async () => {
    let note;
    if (id) {
      note = await updateNote(id, { title, content });
    } else {
      note = await createNote({ title, content });
    }

    if (file) {
      await uploadPDF(file);
      alert("PDF uploaded!");
    }

    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{id ? "Edit Note" : "New Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ display: "block", margin: "10px 0", width: "100%" }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        style={{ display: "block", margin: "10px 0", width: "100%", height: "100px" }}
      ></textarea>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleSave} style={{ marginTop: "10px" }}>
        Save
      </button>
    </div>
  );
}
