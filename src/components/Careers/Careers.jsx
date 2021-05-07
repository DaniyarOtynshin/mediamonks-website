import React, { useEffect, useState } from 'react';

const offices = ["amsterdam", "berlin", "buenos aires", "dubai", "hilversum", "kuala lumpur", "london", "los angeles", "melbourne", "mexico city", "new delhi", "new york", "nur-sultan", "riyadh", "san francisco", "shanghai", "singapore", "sydney", "são paulo", "toronto"];


const Careers = () => {

    const [activeOffice, setActiveOffice] = useState('');

    useEffect(() => {
        window.scrollTo({top: 0});
    })

    const onClick = (office) => {
        setActiveOffice(office)
    }

    return (
        <section className="careers">
            <h2 className="careers__title">careers</h2>
            <div className="careers__filter-office-wrapper">
                <ul className="careers__filter-office">
                    <li className="careers__filter-office-item">all</li>
                    {
                        offices.map((office, index) => {
                            return (
                                <li
                                key={index}
                                onClick={() => onClick(office)}
                                className={`careers__filter-office-item ${activeOffice === office ? "_active" : ""}`}
                                >
                                    {office}
                                </li>
                            )
                        })
                    }
                    <li className="careers__filter-office-item careers__filter-office-item_button">
                        <button className="block-button">
                            <span className="block-text">
                                show
                                <span className="block-rest">all</span>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            <ul className="careers__vacancies">
                <li className="careers__vacancies-item _1">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _2">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _3">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _4">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _5">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _6">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _7">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _8">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
                <li className="careers__vacancies-item _9">
                    <div className="careers__vacancies-content">
                        <h2 className="careers__vacancies-title">Account Manager at MediaMonks AMS</h2>
                        <span className="careers__vacancies-office">
                            Amsterdam
                            <span>Client Services</span>
                        </span>
                    </div>
                </li>
            </ul>
            <h2 className="careers__applications">open applications</h2>
            <div className="careers__open-open">
                <div className="careers__inner">
                    <p className="careers__open-open-text">Nothing that matches your skill set? We have awesome jobs for awesome people. Tell us about yourself and your trade and we may dream up your digital dream job just like that. Seriously, we’re open to open applications.</p>
                </div>
                <div className="careers__inner">
                    <a href="https://apply.workable.com/mediamonks/j/0D7CC8F360/apply/" target="blank" className="careers__button">apply for a job</a>
                </div>
            </div>
        </section>
    )
};

export default Careers;