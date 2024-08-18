import React,{useContext} from 'react';
import noteContext from '../context/NoteContext';

export const NoteItem=(props)=>{
    const {note,updateNote} = props;
    const context = useContext(noteContext);
    const {deleteNote} = context;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.name}</h5>
                    <p className="card-text">{note.description}</p>
                    {/* <a href="/" className="btn btn-primary">Button</a> */}
                    <i className="fa-solid fa-trash-can mx-4" onClick={()=>{deleteNote(note.isbn)}}></i>
                    <i className="fa-regular fa-pen-to-square mx-4" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;