import Notebook from "./Notebook"

const Notebooks = ({notebooks, onDelete, onEdit}) => {
    return (
        <div>
            {notebooks.map((notebook) => (<Notebook key={notebook._id} notebook={notebook} onDelete={onDelete} onEdit={onEdit}/>))}
        </div>
    )
}

export default Notebooks
