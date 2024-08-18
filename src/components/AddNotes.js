import React, {useContext, useState} from 'react';
import noteContext from '../context/NoteContext';

export const AddNotes = () =>{
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note,setNote] = useState({name:"",author:"",isbn:"",tag:"",description:""});
    const handleOnclick = (e)=>{
        e.preventDefault();
        addNote(note.name,note.author,note.isbn,note.tag,note.description);
        setNote({name:"",author:"",isbn:"",tag:"",description:""});
    };

    const onChange = (e)=>{
        setNote({...note,[e.target.id]:e.target.value});
    };

    return (
        <div className="container my-3">
            <h2>Add your notes</h2>
            <form className="col-md-6" name="noteForm">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value = {note.name} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" value={note.author} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="isbn" className="form-label">ISBN</label>
                    <input type="text" className="form-control" id="isbn" value={note.isbn} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" value={note.tag} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={note.description} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={note.name.length<=1 || note.author.length<=1 || note.isbn.length<1} onClick={handleOnclick}>Add Note</button>
            </form>
        </div>
    )
}