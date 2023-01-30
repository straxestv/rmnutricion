import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
{
    M1C1: { type: String},
    M1C2: { type: String},
    M1C3: { type: String},
    M1C4: { type: String},
    M1C5: { type: String},
    M1C6: { type: String},
    M1C7: { type: String},
    M1C8: { type: String},

    M2C1: { type: String},
    M2C2: { type: String},
    M2C3: { type: String},
    M2C4: { type: String},
    M2C5: { type: String},
    M2C6: { type: String},
    M2C7: { type: String},
    M2C8: { type: String},
    Suplem:{ type: String},

    date: Date,
    user: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Note = mongoose.model('Note', noteSchema);
export default Note;
