import React from 'react';

import instagramPath from '../../assets/inst.svg';
import facebookPath from '../../assets/fb.svg';
import twitterPath from '../../assets/tw.svg';
import linkedinPath from '../../assets/in.svg';

function Footer() {
    return (
        <footer className="page__footer footer">
            <div className="footer__table table">
                <div className="table__row">
                    <div className="table__title table__title_time">office time</div>
                    <div className="table__title table__title_office">office open</div>
                    <div className="table__title table__title_address">addres</div>
                    <div className="table__title table__title_address">contact</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">hilversum</div>
                    <div className="table__contact">Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands</div>
                    <div className="table__contact">hilversum@mediamonks.com +31 35 621 21 50</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Nur-Sultan</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America 228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Nur-Sultan</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America 228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Nur-Sultan</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America 228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__office">Astana</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                    <div className="table__contact">228 East 45th Street, Suite 9E New York, NY 10017 United States of America</div>
                </div>
            </div>
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