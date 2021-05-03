import React from 'react';

function Footer() {
    return (
        <footer className="page__section page__footer footer">
            <div className="footer__social social">
                <a href="https://www.instagram.com/mediamonks/" target="blank" className="social__item">gram</a>
                <a href="https://twitter.com/mediamonks" target="blank" className="social__item">t</a>
                <a href="https://www.facebook.com/mediamonks" target="blank" className="social__item">f</a>
                <a href="https://www.linkedin.com/company/mediamonks/" className="social__item">in</a>
            </div>
            <p className="footer__privacy">© MediaMonks | View privacy notice</p>
        </footer>
    )
}

export default Footer;