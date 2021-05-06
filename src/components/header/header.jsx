import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {

    const [isMain, setIsMain] = useState(true);
    const [state, setState] = useState(false);
    const logo = useRef(null);

    useEffect(() => {
      window.onscroll = () => {
        onScroll()
      }
    }, []);

    const onLinkClick = () => {
        setIsMain(false);
    }

    const onHomeClick = () => {
        setIsMain(true);
    }

    const onScroll = () => {
        const elementHeight = logo.current.offsetHeight;
        const elementStart = 6;
        let elementPoint = elementHeight / elementStart;
        window.pageYOffset > elementPoint ? setState(true) : setState(false)
    };

    return (
        <header className="page__section page__header header">
            <div className={`menu header__menu ${state ? "header__menu_active" : ""}`}>
                <div className="menu__body">
                    <ul className="menu__list">
                        <li onClick={onHomeClick} className={`menu__toggle-container ${isMain ? "_hidden" : ""}`}>
                            <NavLink to="/" className="menu__toggle-link">
                                <div className="menu__toggle">
                                    <div className="menu__toggle-top">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="menu__toggle-bottom">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li onClick={onLinkClick} className="menu__item"><NavLink to="/about" className="menu__link">about</NavLink></li>
                        <li onClick={onLinkClick} className="menu__item"><NavLink to="/careers" className="menu__link">careers</NavLink></li>
                        <li onClick={onLinkClick} className="menu__item"><NavLink to="/contact" className="menu__link">contact</NavLink></li>
                        <li className="menu__item"><NavLink to="/blog" target="blank" className="menu__link">blog</NavLink></li>
                        <li className="menu__item"><a href="https://www.youtube.com/watch?v=JNU8DhMKryI&ab_channel=MediaMonks" target="blank" className="menu__link">watch our mixtape</a></li>
                    </ul>
                </div>
            </div>
            <div ref={logo} className={`header__logo ${state ? 'header__logo_active' : ''}`}>
                media monks
            </div>
        </header>
    )
}

export default Header;