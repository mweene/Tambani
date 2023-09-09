import Logo from "../assets/WHITE-LOGO.svg";

export default function Navbar() {
    return (
        <nav className="flex place-content-between font-body">
            <img src= {Logo} alt="tambani logo" className="w-auto h-11 logo" />

            <ul className="flex items-center gap-4 text-lg capitalize nav-list">
                <li className="nav-item"><a href="" className="nav-link">home</a></li>
                <li className="nav-item"><a href="" className="nav-link">series</a></li>
                <li className="nav-item"><a href="" className="nav-link">movies</a></li>
                <li className="nav-item"><a href="" className="nav-link">adult swim</a></li> 
            </ul>
        </nav>
    );
}