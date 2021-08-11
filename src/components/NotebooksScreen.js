import { useState, useEffect } from "react";
import Header from "./Header";
import Notebooks from "./Notebooks";
import api from "../utils/api";

const NotebooksScreen = () => {
    
    const [notebooks, setNotebooks] = useState([])

    useEffect(() => {
        getNotebooksDb()
    }, [])

    const getNotebooksDb = async () => {
        const {data} = await api.get('notebooksDB')        
        setNotebooks(data)
    }

    const deleteNotebook = async (id)=>{
        await api.delete(`notebook/${id}`)
        setNotebooks(notebooks.filter((notebook) => notebook._id !== id))
    }

    const editNotebook = async (notebook)=>{
        await api.put(`notebook/${notebook._id}`,notebook)
        setNotebooks(notebooks.map((note) => note._id === notebook._id ? {...note, model:notebook.model, price:notebook.price} : note ))
    }
    
    return (
        <div className="container">
            <Header />
            {notebooks.length > 0 ? <Notebooks notebooks={notebooks} onEdit={editNotebook} onDelete={deleteNotebook}/> : 'No notebooks to show'}
        </div>
    );
}

export default NotebooksScreen;
