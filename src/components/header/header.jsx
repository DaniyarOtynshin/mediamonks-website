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
        const elementStart = 4;
        let elementPoint = elementHeight / elementStart;
        window.pageYOffset > elementPoint ? setState(true) : setState(false)
    };


    return (
        <header className={`page__header header ${state ? 'header_active' : ''}`}>
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
            <div ref={logo} className={`header__logo ${state ? 'header__logo_active' : ''}`}>
                media monks
            </div>

        </header>
    )
}

export default Header;