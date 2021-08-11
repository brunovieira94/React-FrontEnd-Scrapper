import Button from './Button'
const Header = () => {
    return (
        <header>
            <p align="right"><Button color='red' text="Logout" onClick={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('profile')
                localStorage.removeItem('username')
                window.location.pathname = '/'
            }} /></p>
            <h1>Notebooks</h1>            
        </header>
    )
}

export default Header
