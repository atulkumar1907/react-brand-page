export const Navbar = () => {
    return (
        <nav className='navbar container'>
            <span className='logo'>
                <img src="./images/brand_logo.png" alt="logo"/>
            </span>
            <ul>
                <li><a href='#'>MENU</a></li>
                <li><a href='#'>LOCATION</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>CONTACT</a></li>
            </ul>
            <button>Login</button>
        </nav>
    )
}

export default Navbar