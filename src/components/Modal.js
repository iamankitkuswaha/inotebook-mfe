// import { useState } from "react";
import React,{useRef,useState, useEffect, useContext} from 'react';
import noteContext from '../context/NoteContext';
import NoteItem from './NoteItem';


export const Modal = ()=>{

    const context = useContext(noteContext);
    const {notes,getNotes,editNote} = context;

    useEffect(()=>{
        getNotes()
        // eslint-disable-next-line
    },[]);

    let ref = useRef(null);
    let closeBtnRef = useRef(null);
    const [note,setNote] = useState({ename:"",eauthor:"",eisbn:"",etag:"default",edescription:""});

    const updateNote = (currentNote)=>{
        console.log("currentNote: {}" ,currentNote);
        console.log("currentNote.name: {}" ,currentNote.name);
        ref.current.click();
        setNote({ename:currentNote.name,eauthor:currentNote.author,eisbn:currentNote.isbn,etag:currentNote.tag,edescription:currentNote.description});
        console.log("note {}",note);
    }


    const handleOnclick = (e)=>{
        e.preventDefault();
        editNote(note.eisbn,note.ename,note.eauthor,note.etag,note.edescription);
        closeBtnRef.current.click();
        console.log("update note {}",note);
    };

    const onChange = (e)=>{
        setNote({...note,[e.target.id]:e.target.value});
    };

    return(
        <>
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
            Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="ename" name="ename" value={note.ename} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="eauthor" name="eauthor" value={note.eauthor} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange}/>
                </div>
            </form> 
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal" ref={closeBtnRef}>Close</button>
                <button type="button" onClick={handleOnclick} className="btn btn-primary">Update Note</button>
            </div>
            </div>
        </div>
        </div>
        <div className='row my-3'>
            <h2>Your notes</h2>
            {notes?.map((note)=>{return <NoteItem key = {note.isbn} note={note} updateNote={updateNote}/>})}
        </div>
        </>
    )
}