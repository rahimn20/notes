import React from "react";
import { nanoid } from "nanoid";
import NotesList from "../Notes/NotesList";
import "./Layout.css";
import Search from "../Search/Search";
import Header from "../Header/Header";

function Layout() {
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "It is a simple notes app made with ❤️ by Rahim \nI hope you enjoy it 🙂",
      date: "22/08/2022",
    },
  ]);

  const [searchText, setSearchText] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    console.log(savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // React.useEffect(() => {
  //   localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  // }, [notes]);

  const addNote = (text) => {
    // console.log("Note added by add new note", text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNote));
  };

  return (
    <>
      <div className={`${darkMode && `dark-mode`}`}>
        <div className="layout-container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  );
}

export default Layout;
