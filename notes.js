const express = require('express');
const Note = require('../models/Note');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);

router.get('/', async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
});

router.post('/', async (req, res) => {
  const note = await Note.create({ ...req.body, userId: req.userId });
  res.status(201).json(note);
});

router.put('/:id', async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(note);
});

router.delete('/:id', async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: 'Note deleted' });
});

module.exports = router;