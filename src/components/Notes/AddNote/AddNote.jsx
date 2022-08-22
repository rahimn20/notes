import React from "react";
import "./AddNote.css";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = React.useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    // console.log(e.target.value);
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleOnSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
    }
  };

  return (
    <>
      <div className="notecard-wrapper new-note">
        <textarea
          placeholder="Type to add a note"
          cols="10"
          rows="8"
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="notecard-footer">
          <small>{characterLimit - noteText.length} remaining</small>
          <button className="save" onClick={handleOnSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNote;
