const MainBar = ({activeNote,onUpdateNote}) => {
    
    const onEditField = (key,value) => {
        onUpdateNote({
            ...activeNote,
            [key]:value,
            lastModified: Date.now(),
        });
    }

    if(!activeNote){
        return <div className="no-active-note">No Notes Selected</div>
    }

    return ( 
        <div className="app-main">
            <div className="app-main-note-edit">
        <input type="text"  id="title" 
        value={activeNote.title}
        onChange={(evt)=>onEditField("title",evt.target.value)}
        autoFocus/>
           <textarea name="" id="body"
            value={activeNote.body}
             onChange={(evt)=>onEditField("body",evt.target.value)}
           placeholder="Write your notes here..."></textarea>
            </div>
            <div className="app-main-note-preview">
             <h1 className="preview-title">{activeNote.title}</h1>
            <div className="markdown-preview">{activeNote.body}</div>
            </div>
        </div>
     );
}
 
export default MainBar;