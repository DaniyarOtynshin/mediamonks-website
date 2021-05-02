import headerPath from '../../assets/about_header.jpg';

const About = () => {
    return (
        <section className="page__about about">
            <img src={ headerPath } alt="Header" className="about__cover"/>
            <div className="about__content content">
                <article className="content__text">
                    <h1 className="content__title">about</h1>
                    <p className="content__paragraph">
                    MediaMonks is a global creative production company that partners with clients across industries and markets to craft amazing work for leading businesses and brands. Its integrated production capabilities span the entire creative spectrum, covering anything you could possibly want from a production partner, and probably more.
                    </p>
                    <p className="content__paragraph">
                    From creative campaigns and content to bespoke development and design, MediaMonks works above the line and below the fold at the intersection of creativity and technology. Operating across teams, time zones, and technologies with an incredible in-house team of more than 1500 Monks, including recent S4Capital mergers. Its work is recognized by advertising and craft awards around the world, producing 131 Cannes Lions and 250+ FWAs to date.
                    </p>
                    <p className="content__paragraph">
                    Founded in 2001 and rooted in digital, you can find MediaMonks anywhere on the Web as well as in San Francisco, Los Angeles, Mountain View, Sandpoint, Toronto, New York, Mexico City, Buenos Aires, São Paulo, Dublin, London, Amsterdam, Hilversum, Cape Town, Stockholm, Kiev, Dnepr, Moscow, Nur-Sultan, Dubai, Mumbai, Bangalore, Delhi, Singapore, Shanghai, Sydney, Melbourne, and Auckland.
                    </p>
                    <a href="#" className="content__link">watch our mixtape</a>
                </article>
            </div>
        </section>
    )
}

export default About;