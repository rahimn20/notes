import React from "react";
import "./NotesList.css";
import NotesCard from "./NotesCard";
import AddNote from "./AddNote/AddNote";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <>
      <div className="notelist-container">
        <div className="notes-list">
          {notes.map((note) => (
            <NotesCard
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
          <AddNote handleAddNote={handleAddNote} />
        </div>
      </div>
    </>
  );
}

export default NotesList;
