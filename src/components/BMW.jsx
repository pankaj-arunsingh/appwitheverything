import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getAll from "../services/notes";

const BMW = () => {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    let mounted = true;
    const getNotes = async () => {
      const results = await getAll();
      if (mounted) setNotes(results);
    };
    getNotes();
    return () => {
      mounted = false;
    };
  }, []);

  if (!notes) {
    return <h3>I am a BMW car and loading Notes</h3>;
  }
  return (
    <ul data-testid="list">
      {notes.map((notes) => (
        <li key={notes.id}>{notes.content}</li>
      ))}
    </ul>
  );
};
export default BMW;
