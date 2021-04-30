import React from 'react';

import instagramPath from '../../assets/inst.svg';
import facebookPath from '../../assets/fb.svg';
import twitterPath from '../../assets/tw.svg';
import linkedinPath from '../../assets/in.svg';

function Footer() {
    return (
        <footer className="page__footer footer">
            <div className="footer__info">
                <a href="" className="footer__item"><img src={ instagramPath } className="footer__icon" /></a>
                <a href="" className="footer__item"><img src={ twitterPath } className="footer__icon" /></a>
                <a href="" className="footer__item"><img src={ facebookPath } className="footer__icon" /></a>
                <a href="" className="footer__item"><img src={ linkedinPath } className="footer__icon" /></a>
            </div>
            <p className="footer__privacy">© MediaMonks | View privacy notice</p>
        </footer>
    )
}

export default Footer;