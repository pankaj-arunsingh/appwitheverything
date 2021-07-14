import React from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";

const Note = ({ note }) => <li>{note.content}</li>;

const VolvoNotes = () => {
  const notes = useSelector(({ filter, notes }) => {
    if (!filter.length) {
      return notes;
    }
    return notes.filter(
      (note) => note.content.toUpperCase().indexOf(filter.toUpperCase()) > -1
    );
  });
  return (
    <div>
      <h3>Volvo Notes</h3>
      <Filter label="Filter notes" />
      <ul>
        {notes.length
          ? notes.map((note) => <Note key={note.id} note={note} />)
          : null}
      </ul>
    </div>
  );
};
export default VolvoNotes;
