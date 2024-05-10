

export default function Navbar() {
    return(
        <nav className="nav">
            <a href="/" className="site-title">Tufts Handoff</a>
            <ul>
                <li>
                    <a href="/newlisting">Create a Listing</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    );
}