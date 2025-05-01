import { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get('/notes');
    setNotes(res.data);
  };

  useEffect(() => { fetchNotes(); }, []);

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  return (
    <div>
      <h2>Your Notes</h2>
      <Link to="/create">Create Note</Link>
      {notes.map(note => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <Link to={`/edit/${note._id}`}>Edit</Link>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}