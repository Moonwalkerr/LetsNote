import LogoutBtn from "./logoutBtn";
import SaveNoteBtn from "./saveNote"

const RightBar = ({notes}) => {
    return ( <div className="right-bar">
        <LogoutBtn/>
        <SaveNoteBtn notes={notes}/>
    </div> );
}
 
export default RightBar;