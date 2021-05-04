const offices = ["amsterdam", "berlin", "buenos aires", "dubai", "hilversum", "kuala lumpur", "london", "los angeles", "melbourne", "mexico city", "new delhi", "new york", "nur-sultan", "riyadh", "san francisco", "shanghai", "singapore", "sydney", "são paulo", "toronto"];


const Careers = () => {
    return (
        <section className="careers">
            <h2 className="careers__title">careers</h2>
            <div className="careers__filter-office-wrapper">
                <ul className="careers__filter-office">
                    <li className="careers__filter-office-item">all</li>
                    {
                        offices.map((office) => {
                            return (
                                <li className="careers__filter-office-item">{office}</li>
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
        </section>
    )
};

export default Careers;