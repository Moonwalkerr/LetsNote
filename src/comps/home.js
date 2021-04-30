import '../App.css';
import MainBar from './main';
import Sidebar from './sidebar';
import {useState,useEffect} from "react";
import uuid from "react-uuid";


function Home() {
  const [notes, setnotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setactiveNote] = useState(false);
  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title:"Untitled Note",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      lastModified: Date.now(),  // JS Function 

    }
    setnotes([newNote,...notes]);
  }

  const deleteNote =(id)=>{
    const newNotes = notes.filter(note=>note.id !== id);
    setnotes(newNotes);
  }

  const getActiveNote = ()=>{
    return notes.find((note)=>{
      return note.id === activeNote
      // will return obj of curr active note
    })
  }

  const onUpdateNote = (updatedNote) =>{
    const newNotesArray = notes.map((note)=>{
      if(note.id === activeNote){
        return updatedNote
      }
      return note;
    })
    setnotes(newNotesArray);
  }


  // Storing Notes in Local Storage of Browser

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes])

  return ( 
  <div className ="Home">
    <Sidebar 
    activeNote={activeNote}
    setactiveNote={setactiveNote}
    deleteNote={deleteNote}
     onAddNote={onAddNote}
     notes={notes}/>
    <MainBar
    onUpdateNote={onUpdateNote}
    activeNote={getActiveNote()} // this function needs to be running always to pass current active note
    />
    </div>
  );
}

export default Home;