import Navigation from "./header";

function Header() {
    return (
        <div className="header">
            <div className="header-main">
                {/* Name  */}
                <label className="viva"> Viva Coffee</label>

                {/* Search Input */}
                <div id="search">
                    <input type="text" className="search-inp" />
                    <button className="search-btn">Search</button>
                </div>

                {/* Navigation */}
                <ul className="ul">
                    <li className="li"><a className="nav-link" href="">About</a></li>
                    <li className="li"><a className="nav-link" href="">Menu</a></li>
                    <li className="li"><a className="nav-link" href="">Product</a></li>
                    <li className="li"><a className="nav-link" href="">Contact</a></li>
                    <li className="li"><a className="nav-link" href="">Login</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;