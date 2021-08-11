import React, {useState} from 'react'
import api from '../utils/api'

const Login = () => {
    const [form, setForm] = useState({username: '', password: ''})
    
    const changeForm = (e) => {
        const {name, value} = e.target

        setForm({...form, [name]:value})
    }

    const submitForm = async (e) => {
        e.preventDefault()
        let res = await api.post(`login`,form)
        if(res.data.token){
            if (res.data.user.profile !== 'admin') {
                alert("Usuario não é admin")
            }
            else {
                localStorage.setItem('username', res.data.user.username)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('profile', res.data.user.profile)
            }            
        }
        else{
            alert("Usuario/Senha incorretos")
        }
        window.location.pathname = '/notebooks'
        setForm({username:'', password:''})
    }

    return ( 
        <div onSubmit={submitForm} className="container">
            <form className='add-form'>
                <h2>Admin Login</h2>
                <div className='form-control'>
                    <input placeholder="Usuário" onChange={changeForm} name="username" className="form-control" value={form.username}/>
                </div>
                <div className='form-control'>
                    <input placeholder="Senha" onChange={changeForm} name="password" className="form-control" type="password" value={form.password}/>
                </div>  
                <div className="form-group">
                    <button className="btn btn-primary btn-block">Logar</button>
                </div>      
            </form>
        </div>               
    )
}

export default Login
