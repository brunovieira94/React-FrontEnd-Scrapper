import { useState } from 'react'

const EditNotebook = ({notebook, onEdit}) => {
    const [model, setModel] = useState(notebook.model)
    const [price, setPrice] = useState(notebook.price)
    const onSubmit = (e) => {
        e.preventDefault()
        const _id = notebook._id       

        if(!model){
            alert('Please add a Model')
            return
        }
        if(!price){
            alert('Please add a Price')
            return
        }

        onEdit({_id, model, price})
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Notebook</label>
                <input type='text' placeholder='Model' value={model} onChange={(e)=>setModel(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input type='text' placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>     
            <input type="submit" value="Save" className='btn btn-block'/>       
        </form>
    )
}

export default EditNotebook
