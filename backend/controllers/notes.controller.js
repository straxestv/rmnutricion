import Note from "../models/Note.js";
//const Form = require('../models/Formu');

export const getNote = async (req, res, next) => {
    try {
    const note = await Note.findById(req.params.id);

    if (!note) {
        const error = new Error("Note does not exists");
        error.status = 404;
        throw error;
    }

    res.json(note);
    } catch (error) {
    next(error);
    }
};