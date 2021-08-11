export const isAuthenticated = () => {
    let isAdmin = localStorage.getItem('profile') === "admin"
    return localStorage.getItem('token') && isAdmin
}