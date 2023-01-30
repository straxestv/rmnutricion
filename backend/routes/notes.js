import express from 'express';
import Note  from'../models/Note.js';
import { isAuthFactory } from '../utils.js';
//import {getNote} from'../controllers/notes.controller.js';
//import expressAsyncHandler from 'express-async-handler';

const router = express.Router();

router.get("/",isAuthFactory(async (req, res) => {
    const notes = await Note.find({
        user: req.user.email
    });
    res.json(notes);
    
}));

router.post("/", async(req, res) =>{
    const { title, content, date, user } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        user
    });
    await newNote.save();
    res.json('New Note added');
});

router.get("/:email", async(req, res) => {
    const note = await Note.find({email:req.params.email});
    res.json(note);
    console.log("nose");
    console.log(note);
});
router.delete("/:email", async(req, res) => {
    await Note.findByIdAndDelete(req.params.id)
        res.json('Note Deleted');
});
router.put("/:email", async(req, res) => {
    const { title, content, duration, date, user } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        user
    });
    res.json('Note Updated');
});

export default router;