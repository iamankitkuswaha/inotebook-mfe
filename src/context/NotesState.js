import noteContext from "./NoteContext";
import React, {useState} from 'react';

export const NotesState = (props)=>{

    // const s1 = {
    //     "name":"Ankit",
    //     "class":"10A"
    // }

    // const [state,setState] = useState(s1);

    // const update = ()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name":"Ankit Kushwaha",
    //             "class":"10B"
    //         })
    //     },1000);

    // }

    const notesInitial = []


const [notes,setNotes] = useState(notesInitial);
const host = "http://localhost:8080";

//  Get all notes
const getNotes = async () =>{
    const response = await fetch(`${host}/api/v1/inotebooks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    const responseJson = await response.json();
    console.log(responseJson);
    setNotes(responseJson);
}

// add notes
const addNote = async (name,author,isbn,tag,description) =>{
    const response = await fetch(`${host}/api/v1/inotebooks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({isbn,name,author,tag,description}),
      });

    const responseJson = await response.json();
    console.log(responseJson);
    setNotes(notes.concat(responseJson));
}


// delete notes
const deleteNote = async(isbn) =>{
    await fetch(`${host}/api/v1/inotebooks/delete/isbn/${isbn}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

    const newNotes = notes.filter((note)=>{return note.isbn!==isbn});
    setNotes(newNotes);
    console.log("delete",isbn);
}

// edit notes
const editNote = async (isbn,name,author,tag,description) =>{
    const response = await fetch(`${host}/api/v1/inotebooks/update/${isbn}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({isbn,name,author,tag,description}),
      });
    let newNotes = await JSON.parse(JSON.stringify(notes));
    for(let i=0; i<newNotes.length; i++) { 
      if(newNotes[i].isbn === isbn){
        newNotes[i].name = name!==null?name:newNotes[i].name;
        newNotes[i].author = author!==null?author:newNotes[i].author;
        newNotes[i].tag = tag!==null?tag:newNotes[i].tag;
        newNotes[i].description = description!==null?description:newNotes[i].description;
        break;
      }
    }
    setNotes(newNotes);
    console.log("edit",isbn, response);
}

return (
    <noteContext.Provider value={{notes, getNotes, addNote, deleteNote, editNote}}>
        {props.children}
    </noteContext.Provider>
)
}
export default NotesState;
