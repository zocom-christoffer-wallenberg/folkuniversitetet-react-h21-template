import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Hem</Link>
            <Link to="/about">Om</Link>
        </nav>
    )
}

export default Navbar;