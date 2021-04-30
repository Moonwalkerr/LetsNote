import {fireStore} from "../keys/firebaseConfig";
import {Alert } from 'react-bootstrap';
import {useState} from "react";
import {useAuth} from "../context/authCont";

const SaveNoteBtn = ({notes}) => {
    const {currentUser} = useAuth();
    const [error,setError] = useState(null);
   
    const saveNote = (note) =>{
         const databaseRef = fireStore.collection(currentUser.email);
         note.map((n)=>{
         try{  databaseRef.add({...n})
        }
         catch(err){
             setError(err.message);
         }        
    })
}
return ( <div className="saveNote">
        {error && <Alert 
            style={{marginBottom:"0px"}} variant="danger">{error}</Alert>}
        <button 
        onClick={()=>saveNote(notes)}
        className="save">
            Save
        </button>
    </div> );
}
 
export default SaveNoteBtn;