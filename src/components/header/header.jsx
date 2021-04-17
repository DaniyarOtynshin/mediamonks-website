import React from 'react';

function Header() {
    return (
        <header className="page__header header">
            <div className="header__menu menu">
                <div className="menu__body">
                    <ul className="menu__list">
                        <li><a href="#" className="menu__link">about</a></li>
                        <li><a href="#" className="menu__link">careers</a></li>
                        <li><a href="#" className="menu__link">contact</a></li>
                        <li><a href="#" className="menu__link">blog</a></li>
                        <li><a href="#" className="menu__link">watch our mixtape</a></li>
                    </ul>
                </div>
            </div>
            <div className="header__logo">
                media monks
            </div>

        </header>
    )
}

export default Header;