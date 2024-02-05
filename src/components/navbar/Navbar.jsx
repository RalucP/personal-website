import './Navbar.styles.scss'

const Navbar = () => {
    return(
        <nav className="navbar">
            <a className="nav-element" href='#home'>Home</a>
            <a className="nav-element" href='#projects'>Projects</a>
            <a className="nav-element" href='#about'>About</a>
            <a className="nav-element" href='#contact'>Contact</a>
        </nav>
    )
}

export default Navbar;