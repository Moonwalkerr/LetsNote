import {fireStore} from "../keys/firebaseConfig";
import {useState, useEffect} from "react";

const useStorage = (data) => {
    // error
    const [error, setError] = useState(null);
    
    const {currentUser} = useAuth();
useEffect(() => {
          const databaseRef = fireStore.collection(currentUser.email);
         try{  databaseRef.add({...data})}
         catch(err){
             setError(err.message);
         }        
    }, [currentUser.email,data]);

    return {error};
}
 
export default useStorage;
