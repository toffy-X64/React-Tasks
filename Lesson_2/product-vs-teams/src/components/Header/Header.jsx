import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1>eApp</h1>
                <nav className="header__nav">
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Home</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">About</a>
                    </li>
                </nav>
            </div>
        </header>
    );
}

export default Header;