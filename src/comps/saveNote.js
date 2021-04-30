const SaveNoteBtn = (note) => {

    const saveNote = (note) =>{
        console.log(note);
    }
return ( <div className="saveNote">
        <button 
        onClick={()=>saveNote(note)}
        className="save">
            Save
        </button>
    </div> );
}
 
export default SaveNoteBtn;