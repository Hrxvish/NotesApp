import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NotesList from "./pages/NotesList";
import NoteEditor from "./pages/NoteEditor";
import PublicView from "./pages/PublicView";

function App() {
  return (
    <>
      <header>
        NotesApp Pro
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new">New Note</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/new" element={<NoteEditor />} />
          <Route path="/edit/:id" element={<NoteEditor />} />
          <Route path="/public/:id" element={<PublicView />} />
        </Routes>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} NotesApp Pro. All rights reserved.
      </footer>
    </>
  );
}

export default App;
