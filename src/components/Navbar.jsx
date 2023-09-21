import logo from '../assets/logo.svg'

export default function Navbar(){
    return(
        <nav className="navbar">
            <a className="nav-element" href="">Home</a>
            <a className="nav-element" href="">Projects</a>
            <img className="logo" src={logo} alt="logo" />
            <a className="nav-element" href="">About</a>
            <a className="nav-element" href="">Contact</a>
        </nav>
    )
}