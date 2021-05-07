const Table = () => {
    return (
        <div className="page__section page__table table">
                <div className="table__row table__row_title">
                    <div className="table__title table__title_time">office time</div>
                    <div className="table__title table__title_open">office open</div>
                    <div className="table__title table__title_address">addres</div>
                    <div className="table__title table__title_contact">contact</div>
                </div>
                <div className="table__row">
                    <div className="table__time _closed">23:05</div>
                    <div className="table__open _closed">hilversum</div>
                    <div className="table__contact table__contact_address">Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands</div>
                    <div className="table__contact table__contact_contact">hilversum@mediamonks.com +31 35 621 21 50</div>
                </div>
                <div className="table__row">
                    <div className="table__time _closed">10:00</div>
                    <div className="table__open _closed">nur-sultan</div>
                    <div className="table__contact table__contact_address">
                        <span>address</span>
                        010000 Nur-Sultan city Saryarka Avenue 6 Room 1 Office 1310 Kazakhstan
                    </div>
                    <div className="table__contact table__contact_contact">
                        <span>contact</span>
                        nursultan@mediamonks.com +7 (7172) 790389
                    </div>
                </div>
                <div className="table__row">
                    <div className="table__time">23:05</div>
                    <div className="table__open">amsterdam</div>
                    <div className="table__contact table__contact_address">
                        <span>address</span>
                        Danzigerbocht 41C 1013 AM Amsterdam The Netherlands
                    </div>
                    <div className="table__contact table__contact_contact">
                        <span>contact</span>
                        amsterdam@mediamonks.com +31 20 820 24 25
                    </div>
                </div>
                <div className="table__row">
                    <div className="table__time">7:00</div>
                    <div className="table__open">moscow</div>
                    <div className="table__contact table__contact_address">
                        <span>address</span>
                        109012 per. Malyy Cherkasskiy, 2 Cabinet Lounge Moscow Russia
                    </div>
                    <div className="table__contact table__contact_contact">
                        <span>contact</span>
                        moscow@mediamonks.com +7 499 110 44 75
                    </div>
                </div>
            </div>
    )
}

export default Table;
