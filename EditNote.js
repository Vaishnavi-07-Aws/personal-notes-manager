import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api';

export default function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      API.get(`/notes`).then(res => {
        const note = res.data.find(n => n._id === id);
        if (note) {
          setTitle(note.title);
          setContent(note.content);
        }
      });
    }
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) await API.put(`/notes/${id}`, { title, content });
    else await API.post('/notes', { title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit Note' : 'Create Note'}</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Save</button>
    </form>
  );
}