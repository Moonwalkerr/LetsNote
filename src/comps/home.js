import '../App.css';
import MainBar from './main';
import Sidebar from './sidebar';
import {useState,useEffect} from "react";
import uuid from "react-uuid";
import RightBar from "./rightBar";
import {useAuth} from "../context/authCont";
import useFireStore from "../hooks/useFirestore";
import {fireStore} from "../keys/firebaseConfig";
function Home() {

  const [activeNote, setactiveNote] = useState(false);
  const {currentUser} = useAuth();

   const {notes: data} = useFireStore(currentUser.email);
   console.log(data);
  const [notes, setnotes] = useState(data ? data: []);
  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title:"Untitled Note",
      body: "",
      lastModified: Date.now(),  // JS Function 

    }
    setnotes([newNote,...notes]);
  }

 const databaseRef = fireStore.collection(currentUser.email);
  const deleteNote =(id)=>{
     databaseRef.doc(id).delete()
        .then(()=>{
            console.log("Deleted Successfully");
        })
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

  // useEffect(()=>{  databaseRef.add({...notes})
  // },[notes])

  return ( 
  <div className="App">
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
    <RightBar notes={notes}/>   
    </div>
  );
}

export default Home;