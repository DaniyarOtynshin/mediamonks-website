import React, { useEffect, useRef, useState } from 'react';

function Header() {

    const [state, setState] = useState(false);
    const logo = useRef(null);

    useEffect(() => {
      window.onscroll = () => {
        onScroll()
      }
    }, []);

    const onScroll = () => {
        const elementHeight = logo.current.offsetHeight;
        const elementStart = 6;
        let elementPoint = elementHeight / elementStart;
        window.pageYOffset > elementPoint ? setState(true) : setState(false)
    };


    return (
        <header className="page__section page__header header">
            <div className={`menu header__menu ${state ? 'header__menu_active' : null}`}>
                <div className="menu__body">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="#" className="menu__link">about</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">careers</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">contact</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">blog</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">watch our mixtape</a></li>
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