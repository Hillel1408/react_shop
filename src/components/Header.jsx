function Header() {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href="https://github.com/Hillel1408" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/Hillel1408">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
