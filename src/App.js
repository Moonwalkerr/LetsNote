import './App.css';
import MainBar from './comps/main';
import Sidebar from './comps/sidebar';
import {useState} from "react";
import uuid from "react-uuid";


function App() {
  document.title="Lets Note";
  const [notes, setnotes] = useState([]);
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
  return ( 
  <div className ="App">
    <Sidebar 
    activeNote={activeNote}
    setactiveNote={setactiveNote}
    deleteNote={deleteNote}
     onAddNote={onAddNote}
     notes={notes}/>
    <MainBar/>
    </div>
  );
}

export default App;