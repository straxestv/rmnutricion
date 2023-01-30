import express from 'express';
import { isAuthFactory } from '../utils.js';
import Note  from'../models/Note.js';

const router = express.Router();

router.get("/:email", isAuthFactory(async (req, res) => {
    const notes = await Note.find({
        user: req.user.email
    });
    res.json(notes);
}));

router.post("/", isAuthFactory(async (req, res) => {
    const { title, content, date, user } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        user
    });
    await newNote.save();
    res.json('New Note added');
}));
router.get("/:id", isAuthFactory(async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}));
router.delete("/:id", isAuthFactory(async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}));
router.put("/:id", isAuthFactory(async (req, res) => {
    const { title, content, duration, date, user } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        user
    });
    res.json('Note Updated');
}));

export default router;


