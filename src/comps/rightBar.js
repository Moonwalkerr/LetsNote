import LogoutBtn from "./logoutBtn";
import SaveNoteBtn from "./saveNote"

const RightBar = () => {
    return ( <div className="right-bar">
        <LogoutBtn/>
        <SaveNoteBtn/>
    </div> );
}
 
export default RightBar;