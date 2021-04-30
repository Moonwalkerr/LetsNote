import {fireStore} from '../keys/firebaseConfig';
import {useState, useEffect} from "react";

const useFireStore = (collection) => {
    const [notes, setnotes] = useState([]);
    useEffect(() => {
        const unsubscribe = fireStore.collection(collection)
        .onSnapshot((snapshot) =>{
            let comingnotes = [];
            snapshot.forEach(note=>{
                comingnotes.push({...note.data(),id:note.id})
            });
            setnotes(comingnotes);
        })
        return ()=> unsubscribe();
    })
    return {notes};
}
 
export default useFireStore;
