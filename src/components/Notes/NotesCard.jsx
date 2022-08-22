import React from "react";
import "./NotesCard.css";
import { MdDeleteForever } from "react-icons/md";

function NotesCard({ id, text, date, handleDeleteNote }) {
  return (
    <>
      <div className="notecard-wrapper">
        <span>{text}</span>
        <div className="notecard-footer">
          <small>{date}</small>
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </>
  );
}

export default NotesCard;
