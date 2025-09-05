import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPublic } from "../api";

export default function PublicView() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetchPublic(id).then(setNote);
  }, [id]);

  if (!note) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}
