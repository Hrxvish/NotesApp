const API = "http://localhost:5000";

export async function fetchNotes() {
  return fetch(`${API}/notes`).then(r => r.json());
}

export async function fetchNote(id) {
  return fetch(`${API}/notes/${id}`).then(r => r.json());
}

export async function createNote(data) {
  return fetch(`${API}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(r => r.json());
}

export async function updateNote(id, data) {
  return fetch(`${API}/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(r => r.json());
}

export async function deleteNote(id) {
  return fetch(`${API}/notes/${id}`, { method: "DELETE" }).then(r => r.json());
}

export async function fetchPublic(id) {
  return fetch(`${API}/public/${id}`).then(r => r.json());
}

export async function uploadPDF(file) {
  const formData = new FormData();
  formData.append("file", file);
  return fetch(`${API}/upload`, { method: "POST", body: formData }).then(r => r.json());
}
