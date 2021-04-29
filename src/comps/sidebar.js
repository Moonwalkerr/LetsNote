const Sidebar = ({notes, onAddNote,deleteNote}) => {
    return (
         <div className="app-sidebar">
        
        <div className="app-sidebar-header">
            <h1>Let's Note</h1>
            <button onClick={onAddNote}>New Note</button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map(note =>{
                    return <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
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