import { FaTimes } from 'react-icons/fa'
import Button from "./Button"
import EditNotebook from './EditNotebook'
import { useState } from "react";

const Notebook = ({notebook, onDelete, onEdit}) => {

    const [showEditNotebook,setShowEditNotebook] = useState(false)
    return (
        <div className='notebook'>
            <h3>{notebook.model} <FaTimes style={{ color: 'red', cursor:'pointer' }} onClick={()=> onDelete(notebook._id)}/></h3>
            <p>{notebook.price}</p>
            <p align="right"><Button text={showEditNotebook ? "Close Edit" : "Edit"} onClick={() => setShowEditNotebook(!showEditNotebook)} /></p>
            {showEditNotebook && <EditNotebook notebook={notebook} onEdit={onEdit}/>}
        </div>
    )
}

export default Notebook
