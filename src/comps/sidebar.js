const Sidebar = ({notes, onAddNote,deleteNote,activeNote,setactiveNote}) => {


    const sortedNotes = notes.sort((a,b)=> b.lastModified - a.lastModified);
     // compares b & a and sorts acc to lastModified in descending order

    return (
         <div className="app-sidebar">
        
        <div className="app-sidebar-header">
            <h1>Let's Note</h1>
            <button className="addButton" onClick={onAddNote}>+</button>
        </div>
        <div className="app-sidebar-notes">
            {sortedNotes.map(note =>{
                    return <div 
                    key={note.id}
                    className={`app-sidebar-note 
                    ${note.id === activeNote && "active"}`} 
                    onClick={()=>setactiveNote(note.id)}>
                <div className="sidebar-note-title">
                    <strong className="side-note-title">{note.title}</strong>
                    <button onClick={() =>deleteNote(note.id)}>Delete</button>
                </div>
            <p>{note.body && note.body.substring(0,100)+"..."}</p>
            <small className="note-meta">Last Modified {new Date(note.lastModified).toLocaleDateString("en-GB",{
                hour:"2-digit",
                minute:"2-digit"
            })}</small>
            </div>
                })
            }
        </div>
        </div> );
}
 
export default Sidebar;