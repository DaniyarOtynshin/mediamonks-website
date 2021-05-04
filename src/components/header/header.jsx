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

    const onClick = () => {
        isMain
            ? setIsMain(false)
            : setIsMain(true)
    }

    const onScroll = () => {
        const elementHeight = logo.current.offsetHeight;
        const elementStart = 6;
        let elementPoint = elementHeight / elementStart;
        window.pageYOffset > elementPoint ? setState(true) : setState(false)
    };

    console.log(isMain)

    return (
        <header className="page__section page__header header">
            <div className={`menu header__menu ${state ? "header__menu_active" : ""}`}>
                <div className="menu__body">
                    <ul className={`menu__list ${isMain ? "_main" : ""}`}>
                        <li onClick={onClick} className="menu__item menu__item_home"><NavLink exact to="/" className="menu__link menu__link_home"></NavLink></li>
                        <li onClick={onClick} className="menu__item"><NavLink to="/about" className="menu__link">about</NavLink></li>
                        <li onClick={onClick} className="menu__item"><a href="#" className="menu__link">careers</a></li>
                        <li onClick={onClick} className="menu__item"><a href="#" className="menu__link">contact</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">blog</a></li>
                        <li className="menu__item"><a href="https://www.youtube.com/watch?v=JNU8DhMKryI&ab_channel=MediaMonks" className="menu__link">watch our mixtape</a></li>
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